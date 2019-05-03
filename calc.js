import { vue } from './ui.js';

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

export function clampP(num) {
    return Math.max(0, Math.min(num, 1))
}
export function calcDamageWithRedection(damage, base, bonus, flat_reduction, percent_reduction, percent_pen, percent_bonus_pen, flat_pen) {
    // Flat Reduction is distuputed between base and bonus armor.
    const base_ratio = base / (base + bonus);
    const bonus_ratio = bonus / (base + bonus);
    // Flat Reduction
    let ebase = base - (flat_reduction * base_ratio);
    if (ebase > 0) {
        // % Reduction
        ebase *= clampP(1 - percent_reduction);
        if (ebase > 0) {
            // % Pen
            ebase *= clampP(1 - percent_pen);
        }
    }
    // Flat Reduction
    let ebonus = bonus - (flat_reduction * bonus_ratio);
    if (ebonus > 0) {
        // % Reduction
        ebonus *= clampP(1 - percent_reduction);
        if (ebonus > 0) {
            // % Pen and % Bonus Pen
            ebonus *= clampP(1 - percent_pen) * clampP(1 - percent_bonus_pen);
        }
    }
    let defence = ebase + ebonus;
    if (defence > 0) {
        // Flat pen only for positive armor
        defence = Math.max(0, defence - flat_pen);
        return damage * (100 / (100 + defence));
    }
    else
        return damage * (2 - (100 / (100 - defence)));
}

window.onload = function () {
    // Adds recalc to all the input on the page.
    var inputs = document.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", recalc);
        if (inputs[i].tagName !== 'SELECT')
            inputs[i].addEventListener("focus", e => e.currentTarget.select());
    }
    
    // addNewSpellForm("magic");
    // addNewSpellForm("magic");
    // addNewSpellForm("physical");
    document.getElementById("main_collapse").click();
};

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


window.addNewSpellForm = function(damge_type) {
    //TODO
    return;
}