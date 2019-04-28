import { vue } from './ui.js';

export const main_div = document.getElementById("main");
export const champion_data = document.forms.champion_data_form;
export const target_data = document.forms.target_data_form;


export const spell_data_template = document.getElementById("spell_data_template");
export const passive_dao_template = document.getElementById("passive_dao_template");

export let  spell_data_index = 0;

var percent_magic_pen_value = document.getElementById("percent_magic_pen_value");

console.log('calc.js is ready!')

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
    var ap_ratio = asPercent(spellEffect.ap_ratio);

    var total_ad_ratio = asPercent(spellEffect.total_ad_ratio);
    var bonus_ad_ratio = asPercent(spellEffect.bonus_ad_ratio);

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

    // now are done by calcuated values
    // spellEffect.dmg_premitigation = damage;
    // spellEffect.dmg_onhit = dmg_onhit;

    // spellEffect.dmg_dps.value = dmg_dps;

    return {
        damage_type: damage_type,
        pre_damage: damage,
        damage: dmg_onhit
    };
}

var is_recalcing = false;
export function recalc() {
    vue.$forceUpdate();
}
window.recalc = recalc;

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


window.addNewSpellForm = function(damge_type) {
    //TODO
    return;
}

window.removeSpell = function(self) {
    // main_div.removeChild(self.parentElement.parentElement);
}
window.remSpellEffect = function(self) {
    //yikes
    // self.parentElement.parentElement.parentElement.removeChild(self.parentElement.parentElement);
}
// var last_chamption = null;

window.setChampion = (form, champion) => {
}

window.setBaseStats = (form) => {
    return;
}