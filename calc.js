import { downloadingChampionFiles, league_static_data } from './league_data.js';
import { vue } from './ui.js';

export const main_div = document.getElementById("main");
export const champion_data = document.forms.champion_data_form;
export const target_data = document.forms.target_data_form;


export const spell_data_template = document.getElementById("spell_data_template");
export const passive_dao_template = document.getElementById("passive_dao_template");

export let spell_data = [];
export let  spell_data_index = 0;

var percent_magic_pen_value = document.getElementById("percent_magic_pen_value");

export function toNum(value, defaultValue=0) {
    const sanatized = str(value).replace(/([^0-9/*\-+ .]+)/g,'');
    const x = parseFloat(eval(sanatized));
    if (isNaN(x))
        return defaultValue;
    return x;
}
export function asNumber(field, usePlaceHolder = true) {
    if(field == null || field == undefined)
        return 0;
    let x = field;
    if(field.value) {
        if (field.value === "" && usePlaceHolder)
        x = parseFloat(field.placeholder);
    else{
        const sanatized = field.value.replace(/([^0-9/*\-+ .]+)/g,'');
        x = parseFloat(eval(sanatized));
    }
    } 
    if (isNaN(x))
        return 0;
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
    let x = field;
    if(field.value) {
        if (field.value === "")
            x = parseFloat(field.placeholder);
        else
            x = parseFloat(field.value);

    }
    if (isNaN(x))
        return 0.00;
    return x / 100.0;
}

function rnd3(num) {
    return Math.round(num * 100000.0) / 100000.0;
}
// for percents
function rnd3p(num) {
    return (Math.round(num * 100.0 * 100000.0) / 100000.0) + "%";
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
        if (inputs[i].tagName !== 'SELECT')
            inputs[i].addEventListener("focus", e => e.currentTarget.select());
    }
    
    // spell_data_template.classList.add("hidden");
    // addNewSpellForm("magic");
    // addNewSpellForm("magic");
    // addNewSpellForm("physical");
    document.getElementById("main_collapse").click();
};

function onInputForSpellEffect(parent, spellEffect, d) {
    console.log("Caculating spell", spellEffect.id);
    var damage_type = spellEffect.damagetype;

    var base_damage = asNumber(spellEffect.base_damage);
    var ap_ratio = asNumber(spellEffect.ap_ratio);

    var total_ad_ratio = asNumber(spellEffect.total_ad_ratio);
    var bonus_ad_ratio = asNumber(spellEffect.bonus_ad_ratio);

    // var max_health_ratio = asNumber(spellEffect.max_health_ratio);

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
        case "true":
            damage = (base_damage + (d.ap * ap_ratio) + (d.total_ad * total_ad_ratio) + (d.bonus_ad * bonus_ad_ratio));
            dmg_onhit = damage
            break;
        case "not_detected":
            damage = 0;
            dmg_onhit = 0;
            break;
        case "no_damage":
            damage = 0;
            dmg_onhit = 0;
            break;
    }

    spellEffect.dmg_premitigation = damage;
    spellEffect.dmg_onhit = dmg_onhit;
    // spellEffect.dmg_dps.value = dmg_dps;

    return {
        damage_type: damage_type,
        pre_damage: damage,
        damage: dmg_onhit
    };
}

var is_recalcing = false;
export function recalc() {
    if (is_recalcing) {
        console.log('Re-calc called in a Re-calc call. Skipping this Re-calc.');
        return;
    }
    is_recalcing = true;
    console.group('Re-calc');
    console.log('Caused by:', this);
    let total_pre_damage = 0,
        total_pre_magic_damage = 0,
        total_pre_physical_damage = 0,
        total_pre_true_damage = 0,
        total_damage = 0,
        total_magic_damage = 0,
        total_physical_damage = 0,
        total_true_damage = 0;

    var data = get_data();
    // localStorage.setItem("last_used_data", JSON.stringify(data));

    const championSpells = vue.$children;
    for (var i = 0; i < championSpells.length; i++) {

        for(let v of championSpells[i].$children) {
            if(v.$options.name && v.$options.name != 'spell-effects')
                continue;

            var ret;
            try {
                ret = onInputForSpellEffect(championSpells[i], v, data);
            }
             catch(e) {
                 console.log(e);
                continue;
             }

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
            } else if (ret.damage_type === "true") {
                total_pre_damage += ret.pre_damage;
                total_pre_true_damage += ret.pre_damage;
                total_damage += ret.damage;
                total_true_damage += ret.damage;

            } else {
                //TODO
            }
        }
    }
    vue.output.preTotalDmg = total_pre_damage;
    vue.output.preMagicDmg = total_pre_magic_damage;
    vue.output.prePhysicalDmg = total_pre_physical_damage;

    vue.output.totalDmg = total_damage;
    vue.output.magicDmg = total_magic_damage;
    vue.output.physicalDmg = total_physical_damage;
    vue.output.trueDmg = total_true_damage;

    var hp_diff = data.health - total_damage;
    if (hp_diff < 0) {
        vue.output.status = "Dead";
        vue.output.overkill = -hp_diff + " damage overkill";
        vue.output.hpRemaining = "0";
        vue.output.hpRemainingPercent = "0%";
    } else if (hp_diff > 1) {
        vue.output.status = "Alive";
        vue.output.overkill = "N/A";
        vue.output.hpRemaining = hp_diff;
        vue.output.hpRemainingPercent = hp_diff / data.health;
    } else {
        vue.output.status = "Dead (Maybe)";
        vue.output.overkill = "N/A";
        vue.output.hpRemaining = hp_diff;
        vue.output.hpRemainingPercent = hp_diff / data.health;
    }
    console.groupEnd();
    is_recalcing = false;
}
window.recalc = recalc;

function get_data() {
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
        ap: vue.player.ap,
        total_ad: vue.player.total_ad,
        base_ad: vue.player.base_ad,
        bonus_ad: vue.player.bonus_ad,

        attack_speed: vue.player.attack_speed,
        crit_change: vue.player.crit_change,
        crit_damage: vue.player.crit_damage,
        life_steal: vue.player.life_steal,

        percent_magic_pen: percent_magic_pen,
        percent_armor_pen: percent_armor_pen,
        flat_magic_pen: flat_magic_pen,
        spell_vamp: vue.player.spell_vamp,

        lethality: vue.player.lethality,
        champion_level: vue.player.level,
        armor_pen: vue.player.flat_armor_pen,

        health: asNumber(target_data.target_hp),
        mr: asNumber(target_data.target_mr),
        armor: asNumber(target_data.target_armor),

        eff_mr: asNumber(target_data.target_mr) * (1.0 - percent_magic_pen) - flat_magic_pen,

        eff_armor: asNumber(target_data.target_armor) * (1.0 - percent_armor_pen) - armor_pen,
        hp5: asNumber(target_data.target_hp5),
    };
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
        inputs[i].addEventListener("focus", e => e.currentTarget.select());
    }

    main_div.appendChild(cloned);
    recalc();
}

window.removeSpell = function(self) {
    main_div.removeChild(self.parentElement.parentElement);
}
window.remSpellEffect = function(self) {
    //yikes
    self.parentElement.parentElement.parentElement.removeChild(self.parentElement.parentElement);
}
// var last_chamption = null;

window.setChampion = (form, champion) => {
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
    return;
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

    // let playerChamp = localStorage.getItem('last_used_player_champ');
    // let tagetChamp = localStorage.getItem('last_used_target_champ');

    // var select = document.getElementById('player_champion_select');
    // select.value = playerChamp;
    // setChampion(select.form, select.value)
    // select = document.getElementById('target_champion_select');
    // select.value = tagetChamp;
    // setChampion(select.form, select.value);

}