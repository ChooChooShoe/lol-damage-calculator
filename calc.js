var champion_dat = document.forms.champion_data_form;
var target_data = document.forms.target_data_form;
var other_data = document.forms.other_data_form;

var percent_magic_pen_value = document.getElementById("percent_magic_pen_value");

function asNumber(field) {
    var x = parseFloat(field.value);
    if (isNaN(x))
        return 0;
    return x;
}
function asInt(field) {
    var x = parseInt(field.value);
    if (isNaN(x))
        return 0;
    return x;
}

function asPercent(field) {
    var x = parseFloat(field.value);
    if (isNaN(x))
        return 0;
    return x / 100.0;
}

function rnd3(num) {
    return Math.round(num * 1000.0) / 1000.0;
}

function validate_champion_data(form) {
    return true;
}

function calc_champion_data(form) {
    console.log("Caculating");
    var ap = asNumber(form.ap);
    var total_ad = asNumber(form.total_ad);
    var base_ad = asNumber(form.base_ad);
    var bonus_ad = asNumber(form.bonus_ad);

    var attack_speed = asPercent(form.attack_speed);
    var crit_change = asPercent(form.crit_change);
    var crit_damage = asPercent(form.crit_damage);
    var life_steal = asPercent(form.life_steal);


    var percent_magic_pen;
    if (form.has_void_staff.checked) {
        percent_magic_pen = 0.40;
        percent_magic_pen_value.innerHTML = "&nbsp;= 40% Magic Pen.";
    } else {
        percent_magic_pen = 0.0;
        percent_magic_pen_value.innerHTML = "&nbsp;= 0% Magic Pen.";
    }

    var flat_magic_pen = asNumber(form.flat_magic_pen);
    var spell_vamp = asPercent(form.spell_vamp);

    var lethality = asNumber(form.lethality);
    var champ_level = asNumber(form.champ_level);
    var armor_pen = asNumber(form.armor_pen);

    var mr = parseFloat(form.target_mr.value) * (1.0 - percent_pen) - parseFloat(form.champs_pen.value);

    var damage = (base_magic_damage + (ap * apscale));
    var dmg_onhit = damage * (100 / (100 + mr));
    var dmg_dps = 0; // dmg_onhit * (1 / cooldown);


    other_data.dmg_premitigation.value = damage;
    other_data.dmg_onhit.value = dmg_onhit;
    other_data.dmg_dps.value = dmg_dps;
}

function calc_lethality(form, direction) {
    console.log("calc_lethality");

    var lethality = asNumber(form.lethality.value);
    var champ_level = asNumber(form.champ_level.value);
    var armor_pen = asNumber(form.armor_pen.value);

    if (direction) {
        form.armor_pen.value = rnd3(lethality * (0.6 + (0.4 * champ_level / 18.0)));
    } else {
        form.lethality.value = rnd3(armor_pen / (0.6 + (0.4 * champ_level / 18.0)));
    }
}

var form = document.forms.champion_data_form;

// For lethality and armor pen.
document.getElementById("lethality").addEventListener("input", function () {
    calc_lethality(form, true);
});
document.getElementById("champ_level").addEventListener("input", function () {
    calc_lethality(form, true);
});
document.getElementById("armor_pen").addEventListener("input", function () {
    calc_lethality(form, false);
});

var f = function () {
    if (validate_champion_data(form)) {
        calc_champion_data(form);
    }
};
var inputs = form.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
    // inputs[i].style.backgroundColor = "red";
    inputs[i].addEventListener("input", f);
}

function collapseExtras(self) {
    var inputs = self.parentElement.getElementsByClassName("extra");
    for (var i = 0; i < inputs.length; i++) {
        var element = inputs[i];
        element.style = "display: none;";
    }
}

function expandExtras(self) {
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