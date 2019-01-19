var main_div = document.getElementById("main");
var champion_data = document.forms.champion_data_form;
var target_data = document.forms.target_data_form;
// var other_data = document.forms.other_data_form;


var spell_data_template = document.getElementById("spell_data_template");
var spell_data = [];
var spell_data_index = 0;

var percent_magic_pen_value = document.getElementById("percent_magic_pen_value");

function asNumber(field, usePlaceHolder=true) {
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

function asPercent(field) {
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
    return (Math.round(num * 100.0 * 1000.0) / 1000.0 )+ "%";
}

function validate_champion_data(form) {
    return true;
}

function calc_spell(form, idx) {
    console.log("Caculating a spell");
    var base_damage = asNumber(form.base_damage);
    var ap_ratio = asPercent(form.ap_ratio);

    var total_ad_ratio = asPercent(form.total_ad_ratio);
    var bonus_ad_ratio = asPercent(form.bonus_ad_ratio);

    var d = get_data();

    var damage = (base_damage + (d.ap * ap_ratio) + (d.total_ad * total_ad_ratio) + (d.bonus_ad * bonus_ad_ratio));
    var dmg_onhit = damage * (100 / (100 + d.eff_mr));
    var dmg_dps = "Literally Healing //TODO FIX"; // dmg_onhit * (1 / cooldown);


    form.dmg_premitigation.value = damage;
    form.dmg_onhit.value = dmg_onhit;
    form.dmg_dps.value = dmg_dps;
}

function recalc() {
    for (var i = 0; i < spell_data.length; i++) {
        calc_spell(spell_data[i], i);
        
    }
}
function get_data() {
    console.log("Caculating");
    var percent_magic_pen;
    if (champion_data.has_void_staff.checked) {
        percent_magic_pen_value.innerHTML = "&nbsp = 40% Magic Pen.";
        percent_magic_pen = 0.40;
    } else {
        percent_magic_pen_value.innerHTML = "&nbsp = 0% Magic Pen.";
        percent_magic_pen = 0.0;
    }
    var flat_magic_pen = asNumber(champion_data.flat_magic_pen);
    var percent_armor_pen = asNumber(champion_data.percent_armor_pen);
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
        champ_level: asNumber(champion_data.champ_level),
        armor_pen: asNumber(champion_data.armor_pen),

        mr: asNumber(target_data.target_mr),
        armor: asNumber(target_data.target_armor),

        eff_mr: asNumber(target_data.target_mr) * (1.0 - percent_magic_pen) - flat_magic_pen,

        eff_armor: asNumber(target_data.target_armor) * (1.0 - percent_armor_pen) - armor_pen,
    };
}

function calc_lethality(direction) {
    console.log("calc_lethality");

    var lethality = asNumber(champion_data.lethality);
    var champ_level = asNumber(champion_data.champ_level);
    var armor_pen = asNumber(champion_data.armor_pen);

    if (direction) {
        champion_data.armor_pen.value = rnd3(lethality * (0.6 + (0.4 * champ_level / 18.0)));
    } else {
        champion_data.lethality.value = rnd3(armor_pen / (0.6 + (0.4 * champ_level / 18.0)));
    }
}

function calc_ad(direction) {
    var total_ad = asNumber(champion_data.total_ad);
    var base_ad = asNumber(champion_data.base_ad);
    var bonus_ad = asNumber(champion_data.bonus_ad);

    if (direction === 0) {//change to total_ad
        bonus_ad = total_ad - base_ad;
    } else if (direction === 1) {//change to base_ad
        bonus_ad = total_ad - base_ad;
    } else if (direction === 2) {//change to bonus_ad
        total_ad = base_ad + bonus_ad;
    }
    champion_data.total_ad.value = total_ad;
    champion_data.base_ad.value = base_ad;
    champion_data.bonus_ad.value = bonus_ad;
}
function calc_armor(direction) {
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
        if (damage_multiplier <= 0.0 ){
            // not the best way to do +inf.
            target_data.target_armor.value = 100000000;
        }
        else {
            target_data.target_armor.value = rnd3( (100 / damage_multiplier) - 100);
    
            target_armor = asNumber(target_data.target_armor);
            target_data.target_eff_physical_hp.value = rnd3((1 + (target_armor / 100.0)) * target_hp);
        }
    } else if (direction === 2) {

        // target_data.target_eff_physical_hp.value = rnd3((1 + (target_armor / 100.0)) * target_hp);
    }
}

function calc_mr(direction) {
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
        if (damage_multiplier <= 0.0 ){
            // not the best way to do +inf.
            target_data.target_mr.value = 100000000;
        }
        else {
            target_data.target_mr.value = rnd3( (100 / damage_multiplier) - 100);
    
            target_mr = asNumber(target_data.target_mr);
            target_data.target_eff_magic_hp.value = rnd3((1 + (target_mr / 100.0)) * target_hp);
        }
    } else if (direction === 2) {

    }
}


var inputs = champion_data.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
    // inputs[i].style.backgroundColor = "red";
    inputs[i].addEventListener("input", recalc);
}
inputs = target_data.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
    // inputs[i].style.backgroundColor = "red";
    inputs[i].addEventListener("input", recalc);
}


function collapseExtras(self) {
    self.classList.add("hidden");
    self.previousElementSibling.classList.remove("hidden");
    var inputs = self.parentElement.getElementsByClassName("extra");
    for (var i = 0; i < inputs.length; i++) {
        var element = inputs[i];
        element.style = "display: none;";
    }
}

function expandExtras(self) {
    self.classList.add("hidden");
    self.nextElementSibling.classList.remove("hidden");
    var inputs = self.parentElement.getElementsByClassName("extra");
    for (var i = 0; i < inputs.length; i++) {
        var element = inputs[i];
        element.style = "";
    }
}

function minusButton(self) {
    var x = asInt(self.nextElementSibling);
    if (x > 0)
        self.nextElementSibling.value = x - 1;
}

function plusButton(self) {
    var x = asInt(self.previousElementSibling);
    if (x < 0)
        self.previousElementSibling.value = 1;
    else
        self.previousElementSibling.value = x + 1;
}


function addNewSpellForm(self) {
    var cloned = spell_data_template.cloneNode(true);
    var idx = spell_data_index;
    spell_data_index++;

    cloned.classList.remove("hidden");
    cloned.id = "spell_data_" + (idx);

    var form = cloned.getElementsByTagName("form")[0];
    form.name = "spell_data_" + (idx) + "_form";
    spell_data.push(form);

    var f = function () {
        calc_spell(form, idx);
    };
    var i;
    var inputs = cloned.getElementsByClassName("input");
    for (i = 0; i < inputs.length; i++) {
        // inputs[i].style.backgroundColor = "blue";
        inputs[i].addEventListener("input", f);
    }

    main_div.appendChild(cloned);
}

spell_data_template.classList.add("hidden");
addNewSpellForm(null);
document.getElementById("main_collapse").click();
recalc();