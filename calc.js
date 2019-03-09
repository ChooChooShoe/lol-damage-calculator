import { downloadingChampionFiles, league_static_data } from './league_data.js';

export const main_div = document.getElementById("main");
export const champion_data = document.forms.champion_data_form;
export const target_data = document.forms.target_data_form;
export const total_data = document.forms.total_data_form;


export const spell_data_template = document.getElementById("spell_data_template");
export const passive_dao_template = document.getElementById("passive_dao_template");

export let spell_data = [];
export let  spell_data_index = 0;

var percent_magic_pen_value = document.getElementById("percent_magic_pen_value");

export function asNumber(field, usePlaceHolder = true) {
    var x;
    if (field.value === "" && usePlaceHolder)
        x = parseFloat(field.placeholder);
    else
        x = parseFloat(field.value);
    // if (isNaN(x))
    //     return 0;
    return x;
}

function asInt(field) {
    var x;
    if (field.value === "")
        x = parseInt(field.placeholder);
    else
        x = parseInt(field.value);
    // if (isNaN(x))
    //     return 0;
    return x;
}

export function asPercent(field) {
    if (field.value === "")
        return parseFloat(field.placeholder) / 100.0;
    var x = parseFloat(field.value);
    // if (isNaN(x))
    //     return 0;
    return x / 100.0;
}

function rnd3(num) {
    return Math.round(num * 1000.0) / 1000.0;
}
// for percents
function rnd3p(num) {
    return (Math.round(num * 100.0 * 1000.0) / 1000.0) + "%";
}

function validate_champion_data(form) {
    return true;
}

window.onload = function () {
    // var last_used_data = JSON.parse(localStorage.getItem("last_used_data"));
    // if (last_used_data) {

    // }
    // Adds recalc to all the input on the page.
    var inputs = document.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", recalc);
    }
    
    // spell_data_template.classList.add("hidden");
    // addNewSpellForm("magic");
    // addNewSpellForm("magic");
    // addNewSpellForm("physical");
    document.getElementById("main_collapse").click();
};

function onInputForSpell(sender, form, idx, d) {
    console.log("Caculating spell", idx);
    var damage_type = form.damage_type.value;

    var base_damage = asNumber(form.base_damage);
    var ap_ratio = asNumber(form.ap_ratio);

    var total_ad_ratio = asNumber(form.total_ad_ratio);
    var bonus_ad_ratio = asNumber(form.bonus_ad_ratio);

    var max_health_ratio = asNumber(form.max_health_ratio);

    var damage, dmg_onhit, dmg_dps = "Literally Healing //TODO FIX"; // dmg_onhit * (1 / cooldown);
    switch (damage_type) {
        case "physical":
            damage = (base_damage + (d.ap * ap_ratio) + (d.total_ad * total_ad_ratio) + (d.bonus_ad * bonus_ad_ratio));

            if (d.eff_armor > 0)
                dmg_onhit = damage * (100 / (100 + d.eff_armor));
            else
                dmg_onhit = 2 - (100 / (100 - d.eff_armor));

            break;

        case "magic":
            damage = (base_damage + (d.ap * ap_ratio) + (d.total_ad * total_ad_ratio) + (d.bonus_ad * bonus_ad_ratio));
            if (d.eff_mr > 0)
                dmg_onhit = damage * (100 / (100 + d.eff_mr));
            else
                dmg_onhit = 2 - (100 / (100 - d.eff_mr));
            break;
        case "not_detected":
            // damage = (base_damage + (d.ap * ap_ratio) + (d.total_ad * total_ad_ratio) + (d.bonus_ad * bonus_ad_ratio));
            // dmg_onhit = damage * (100 / (100 + (d.eff_mr / 2 + d.eff_armor / 2)));
            damage = 0;
            dmg_onhit = 0;
            break;
        case "no_damage":
            return;
    }

    form.dmg_premitigation.value = damage;
    form.dmg_onhit.value = dmg_onhit;
    form.dmg_dps.value = dmg_dps;

    return {
        damage_type: damage_type,
        pre_damage: damage,
        damage: dmg_onhit
    };
}

export function recalc() {
    console.group('Re-calc');
    console.log('Caused by:', this);
    var total_pre_damage = 0,
        total_pre_magic_damage = 0,
        total_pre_physical_damage = 0,
        total_damage = 0,
        total_magic_damage = 0,
        total_physical_damage = 0;
    var target_overkill = 0;

    var data = get_data();
    localStorage.setItem("last_used_data", JSON.stringify(data));

    for (var i = 0; i < spell_data.length; i++) {
        if (spell_data[i].parentElement.classList.contains('hidden'))
            continue;

        const inner_forms = spell_data[i].getElementsByTagName('form');
        Array.prototype.slice.call(inner_forms).forEach(inner_form => {

            var ret = onInputForSpell(this, inner_form, i, data);

            if (ret.damage_type === "physical") {
                total_pre_damage += ret.pre_damage;
                total_pre_physical_damage += ret.pre_damage;
                total_damage += ret.damage;
                total_physical_damage += ret.damage;
            } else if (ret.damage_type === "magic") {
                total_pre_damage += ret.pre_damage;
                total_pre_magic_damage += ret.pre_damage;
                total_damage += ret.damage;
                total_magic_damage += ret.damage;
            } else if (ret.damage_type === "not_detected") {
                //TODO
            } else if (ret.damage_type === "no_damage") {
                //TODO
            }
        });

    }
    total_data.total_pre_damage.value = total_pre_damage;
    total_data.total_pre_magic_damage.value = total_pre_magic_damage;
    total_data.total_pre_physical_damage.value = total_pre_physical_damage;
    total_data.total_damage.value = total_damage;
    total_data.total_magic_damage.value = total_magic_damage;
    total_data.total_physical_damage.value = total_physical_damage;

    var hp_diff = total_damage - data.health;
    if (hp_diff > 0) {
        total_data.target_status.value = "Dead";
        total_data.target_overkill.value = hp_diff + " damage overkill";
        total_data.target_hp_left.value = "0";
        total_data.target_percent_hp_left.value = "0%";
    } else if (hp_diff < 0) {
        total_data.target_status.value = "Alive";
        total_data.target_overkill.value = "N/A";
        total_data.target_hp_left.value = -hp_diff;
        total_data.target_percent_hp_left.value = rnd3p(-hp_diff / data.health);
    } else {
        total_data.target_status.value = "Dead (Exact Leathal)";
        total_data.target_overkill.value = "N/A";
        total_data.target_hp_left.value = "0";
        total_data.target_percent_hp_left.value = "0%";

    }
    console.groupEnd();
}

function get_data() {
    // calc_lethality(true);
    // calc_armor(0);
    // calc_mr(0);
    calc_ad(2);
    var percent_magic_pen;
    if (champion_data.has_void_staff.checked) {
        percent_magic_pen_value.innerHTML = "&nbsp = 40% Magic Pen.";
        percent_magic_pen = 0.40;
    } else {
        percent_magic_pen_value.innerHTML = "&nbsp = 0% Magic Pen.";
        percent_magic_pen = 0.0;
    }
    var flat_magic_pen = asNumber(champion_data.flat_magic_pen);
    var percent_armor_pen = Math.min(Math.max(asPercent(champion_data.percent_armor_pen), 0), 1);

    var armor_pen = asNumber(champion_data.armor_pen);
    return {
        ap: asNumber(champion_data.ap),
        total_ad: asNumber(champion_data.total_ad),
        base_ad: asNumber(champion_data.base_ad),
        bonus_ad: asNumber(champion_data.bonus_ad),

        attack_speed: asNumber(champion_data.attack_speed),
        crit_change: asPercent(champion_data.crit_change),
        crit_damage: asPercent(champion_data.crit_damage),
        life_steal: asPercent(champion_data.life_steal),

        percent_magic_pen: percent_magic_pen,
        percent_armor_pen: percent_armor_pen,
        flat_magic_pen: flat_magic_pen,
        spell_vamp: asPercent(champion_data.spell_vamp),

        lethality: asNumber(champion_data.lethality),
        champion_level: asNumber(champion_data.champion_level),
        armor_pen: asNumber(champion_data.armor_pen),

        health: asNumber(target_data.target_hp),
        mr: asNumber(target_data.target_mr),
        armor: asNumber(target_data.target_armor),

        eff_mr: asNumber(target_data.target_mr) * (1.0 - percent_magic_pen) - flat_magic_pen,

        eff_armor: asNumber(target_data.target_armor) * (1.0 - percent_armor_pen) - armor_pen,
        hp5: asNumber(target_data.target_hp5),
    };
}

window.calc_lethality = (direction) => {
    console.log("calc_lethality");

    var lethality = asNumber(champion_data.lethality);
    var champion_level = asNumber(champion_data.champion_level);
    var armor_pen = asNumber(champion_data.armor_pen);

    if (direction) {
        champion_data.armor_pen.value = rnd3(lethality * (0.6 + (0.4 * champion_level / 18.0)));
    } else {
        champion_data.lethality.value = rnd3(armor_pen / (0.6 + (0.4 * champion_level / 18.0)));
    }
}

window.calc_ad = (direction) => {
    var base_ad = asNumber(champion_data.base_ad);
    var total_ad = asNumber(champion_data.total_ad);
    var bonus_ad = asNumber(champion_data.bonus_ad);

    if (direction === 0) { //change to total_ad
        bonus_ad = total_ad - base_ad;
    } else if (direction === 2) { //change to bonus_ad
        total_ad = base_ad + bonus_ad;
    }
    champion_data.total_ad.value = total_ad;
    champion_data.bonus_ad.value = bonus_ad;
}

window.calc_armor = (direction) => {
    var target_hp = asNumber(target_data.target_hp);

    var target_armor = asNumber(target_data.target_armor);
    var target_eff_physical_hp = asNumber(target_data.target_eff_physical_hp);

    if (direction === 0) {
        if (target_armor < 0) {
            // Damage is amplified.
            target_data.target_physical_reduction.value = "-" + rnd3p(1 - (100.0 / (100.0 - target_armor)));
            target_data.target_eff_physical_hp.value = rnd3((1 + (target_armor / 100.0)) * target_hp);

        } else {
            //Normal damage reduction.
            target_data.target_physical_reduction.value = rnd3p(1 - (100.0 / (100.0 + target_armor)));
            target_data.target_eff_physical_hp.value = rnd3((1 + (target_armor / 100.0)) * target_hp);

        }
    } else if (direction === 1) {
        var damage_multiplier = 1 - asPercent(target_data.target_physical_reduction);
        if (damage_multiplier <= 0.0) {
            // not the best way to do +inf.
            target_data.target_armor.value = 100000000;
        } else {
            target_data.target_armor.value = rnd3((100 / damage_multiplier) - 100);

            target_armor = asNumber(target_data.target_armor);
            target_data.target_eff_physical_hp.value = rnd3((1 + (target_armor / 100.0)) * target_hp);
        }
    } else if (direction === 2) {

        // target_data.target_eff_physical_hp.value = rnd3((1 + (target_armor / 100.0)) * target_hp);
    }
}

window.calc_mr = (direction) => {
    var target_hp = asNumber(target_data.target_hp);

    var target_mr = asNumber(target_data.target_mr);
    var target_eff_magic_hp = asNumber(target_data.target_eff_magic_hp);

    if (direction === 0) {
        if (target_mr < 0) {
            // Damage is amplified.
            target_data.target_magic_reduction.value = "-" + rnd3p(1 - (100.0 / (100.0 - target_mr)));
            target_data.target_eff_magic_hp.value = rnd3((1 + (target_mr / 100.0)) * target_hp);

        } else {
            //Normal damage reduction.
            target_data.target_magic_reduction.value = rnd3p(1 - (100.0 / (100.0 + target_mr)));
            target_data.target_eff_magic_hp.value = rnd3((1 + (target_mr / 100.0)) * target_hp);

        }
    } else if (direction === 1) {
        var damage_multiplier = 1 - asPercent(target_data.target_magic_reduction);
        if (damage_multiplier <= 0.0) {
            // not the best way to do +inf.
            target_data.target_mr.value = 100000000;
        } else {
            target_data.target_mr.value = rnd3((100 / damage_multiplier) - 100);

            target_mr = asNumber(target_data.target_mr);
            target_data.target_eff_magic_hp.value = rnd3((1 + (target_mr / 100.0)) * target_hp);
        }
    } else if (direction === 2) {

    }
}

/// Functions for buttons
window.collapseExtras = function(self) {
    self.previousElementSibling.classList.remove("hidden");
    self.classList.add("hidden");
    var elements = self.parentElement.parentElement.getElementsByClassName("extra");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("hidden");
    }
}

window.expandExtras = function(self) {
    self.classList.add("hidden");
    self.nextElementSibling.classList.remove("hidden");
    var elements = self.parentElement.parentElement.getElementsByClassName("extra");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden");
    }
}

window.minusButton = function(self) {
    var x = asInt(self.nextElementSibling);
    if (x > 0)
        self.nextElementSibling.value = x - 1;
}

window.plusButton = function(self) {
    var x = asInt(self.previousElementSibling);
    if (x < 0)
        self.previousElementSibling.value = 1;
    else
        self.previousElementSibling.value = x + 1;
}

window.styleSelect = function(self) {
    var last = self.previousElementSibling.classList;
    switch (self.value) {
        case "damage_type_physical":
            last.add("ad");
            last.remove("ap");
            break;
        case "damage_type_magic":
            last.add("ap");
            last.remove("ad");
            break;
        default:
            last.remove("ad");
            last.remove("ap");
            break;
    }
}


function addNewSpellForm(damge_type) {
    //TODO
    return;
    var cloned = spell_data_template.cloneNode(true);
    var idx = spell_data_index;
    spell_data_index++;

    cloned.classList.remove("hidden");
    cloned.id = "spell_data_" + (idx);

    var form = cloned.getElementsByTagName("form")[0];
    form.id = "spell_data_" + (idx) + "_form";

    if (damge_type === "magic") {
        form.damage_type.value = "damage_type_magic";
        form.spell_title.value = "Magic Spell #" + (spell_data_index);
    } else if (damge_type === "physical") {
        form.damage_type.value = "damage_type_physical";
        form.spell_title.value = "Physical Spell #" + (spell_data_index);
    } else {
        form.damage_type.value = "damage_type_mixed";
        form.spell_title.value = "Complex Spell #" + (spell_data_index);
        form.expand.click();
    }

    spell_data.push(form);

    // Adds recalc to all the input for cloned section.
    var inputs = cloned.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", recalc);
    }

    main_div.appendChild(cloned);
    recalc();
}

window.removeSpell = function(self) {
    main_div.removeChild(self.parentElement.parentElement);
}
window.remSpellEffect = function(self) {
    //yikes
    self.parentElement.parentElement.parentElement.parentElement.removeChild(self.parentElement.parentElement.parentElement);
}
// var last_chamption = null;

window.setChampion = (form, champion) => {
    if (!champion || !form)
        return;
    const known_stats_data = ["hp", "hpperlevel", "mp", "mpperlevel", "movespeed", "armor", "armorperlevel", "spellblock", "spellblockperlevel", "attackrange", "hpregen", "hpregenperlevel", "mpregen", "mpregenperlevel", "crit", "critperlevel", "attackdamage", "attackdamageperlevel", "attackspeedperlevel", "attackspeed"];
    const known_data = ["partype", "name", "title"];

    if (form.id === 'champion_data_form') {
        localStorage.setItem("last_used_player_champ", champion);
        if (form.data_last_chamption) {
            const children = [...document.getElementsByClassName(`owner-${form.data_last_chamption}`)];
            children.forEach(s => {
                s.classList.add('hidden');
            });
        }
        form.data_last_chamption = champion;
    } else {
        localStorage.setItem("last_used_target_champ", champion);
    }
    console.log(`Setting champion to ${champion}`);
    if (league_static_data.isReady) {
        const data = league_static_data.champion_data[champion];

        known_stats_data.forEach(key => {
            form.elements[`dao_stats_${key}`].value = data.stats[key];
        });
        known_data.forEach(key => {
            form.elements[`dao_${key}`].value = data[key];
        });
        if (form.id === 'champion_data_form')
            downloadingChampionFiles(data.version, champion);
        setBaseStats(form);
    }
}

function getStat(form, stat) {
    var d = form[`dao_stats_${stat}`]
    return parseFloat(d.value);
}



function calcStatNums(champion_level, base, growth) {
    return base + growth * (champion_level - 1) * (0.7025 + 0.0175 * (champion_level - 1));
}

function calcStat(form, champion_level, base, growth) {
    return getStat(form, base) + getStat(form, growth) * (champion_level - 1) * (0.7025 + 0.0175 * (champion_level - 1));
}
window.setBaseStats = (form) => {
    // These values from stats are not used.
    // form.dao_name;
    // form.dao_title;
    // form.dao_partype;
    // form.dao_stats_mp
    // form.dao_stats_mpperlevel
    // form.dao_stats_attackrange
    // form.dao_stats_mpregen
    // form.dao_stats_mpregenperlevel

    if (form.id === 'champion_data_form') {
        var champion_level = asNumber(form.champion_level);

        champion_data.base_ad.value = calcStat(form, champion_level, 'attackdamage', 'attackdamageperlevel');

        if (asNumber(champion_data.bonus_ad) < 0) {
            champion_data.total_ad.value = champion_data.base_ad.value;
            champion_data.bonus_ad.value = 0;
        }

        const ats = getStat(form, 'attackspeed');
        champion_data.attack_speed.value = rnd3(ats + ats * asPercent(form.dao_stats_attackspeedperlevel) * champion_level);
        champion_data.crit_change.value = calcStat(form, champion_level, 'crit', 'critperlevel');
        // form.target_hp.value = calcStat(form, champion_level, 'hp', 'hpperlevel');
        // form.target_mr.value = calcStat(form, champion_level, 'spellblock', 'spellblockperlevel');
        // form.target_armor.value = calcStat(form, champion_level, 'armor', 'armorperlevel');
        // form.target_hp5.value = calcStat(form, champion_level, 'hpregen', 'hpregenperlevel');

    } else if (form.id === 'target_data_form') {
        var champion_level = asNumber(form.champion_level);
        // form.base_ad.value = calcStat(form, champion_level, 'attackdamage', 'attackdamageperlevel');

        // if(asNumber(form.total_ad) < asNumber(form.base_ad))
        //     form.total_ad.value = form.base_ad.value;
        // const ats = getStat(form, 'attackspeed');
        // form.attack_speed.value = rnd3(ats + ats * asPercent(form.dao_stats_attackspeedperlevel) * champion_level);
        // form.crit_change.value = calcStat(form, champion_level, 'crit', 'critperlevel');
        target_data.target_hp.value = calcStat(form, champion_level, 'hp', 'hpperlevel');
        target_data.target_mr.value = calcStat(form, champion_level, 'spellblock', 'spellblockperlevel');
        target_data.target_armor.value = calcStat(form, champion_level, 'armor', 'armorperlevel');
        target_data.target_hp5.value = calcStat(form, champion_level, 'hpregen', 'hpregenperlevel');

        // eff_mr: asNumber(target_data.target_mr) * (1.0 - percent_magic_pen) - flat_magic_pen,

        // eff_armor: asNumber(target_data.target_armor) * (1.0 - percent_armor_pen) - armor_pen,
        // form.health;
    }
}


/// Main Code.
window.onReady = function() {

    let playerChamp = localStorage.getItem('last_used_player_champ');
    let tagetChamp = localStorage.getItem('last_used_target_champ');

    var select = document.getElementById('player_champion_select');
    select.value = playerChamp;
    setChampion(select.form, select.value)
    select = document.getElementById('target_champion_select');
    select.value = tagetChamp;
    setChampion(select.form, select.value);

}