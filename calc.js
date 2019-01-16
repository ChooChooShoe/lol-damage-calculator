var champion_data = document.forms.champion_data_form;
var target_data = document.forms.target_data_form;
var other_data = document.forms.other_data_form;

var percent_magic_pen_value = document.getElementById("percent_magic_pen_value");

function asNumber(field) {
    if (field.value === "")
        return field.placeholder;
    var x = parseFloat(field.value);
    if (isNaN(x))
        return 0;
    return x;
}

function asInt(field) {
    if (field.value === "")
        return field.placeholder;
    var x = parseInt(field.value);
    if (isNaN(x))
        return 0;
    return x;
}

function asPercent(field) {
    if (field.value === "")
        return parseFloat(field.placeholder) / 100.0;
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

function recalc() {
    console.log("Caculating");
    var ap = asNumber(champion_data.ap);
    var total_ad = asNumber(champion_data.total_ad);
    var base_ad = asNumber(champion_data.base_ad);
    var bonus_ad = asNumber(champion_data.bonus_ad);

    var attack_speed = asPercent(champion_data.attack_speed);
    var crit_change = asPercent(champion_data.crit_change);
    var crit_damage = asPercent(champion_data.crit_damage);
    var life_steal = asPercent(champion_data.life_steal);


    var percent_magic_pen;
    if (champion_data.has_void_staff.checked) {
        percent_magic_pen = 0.40;
        percent_magic_pen_value.innerHTML = "&nbsp;= 40% Magic Pen.";
    } else {
        percent_magic_pen = 0.0;
        percent_magic_pen_value.innerHTML = "&nbsp;= 0% Magic Pen.";
    }

    var percent_armor_pen = asPercent(champion_data.percent_armor_pen);

    var flat_magic_pen = asNumber(champion_data.flat_magic_pen);
    var spell_vamp = asPercent(champion_data.spell_vamp);

    var lethality = asNumber(champion_data.lethality);
    var champ_level = asNumber(champion_data.champ_level);
    var armor_pen = asNumber(champion_data.armor_pen);

    var mr = asNumber(target_data.target_mr) * (1.0 - percent_magic_pen) - flat_magic_pen;

    var armor = asNumber(target_data.target_armor) * (1.0 - percent_armor_pen) - armor_pen;

    var damage = (base_magic_damage + (ap * apscale));
    var dmg_onhit = damage * (100 / (100 + mr));
    var dmg_dps = 0; // dmg_onhit * (1 / cooldown);


    other_data.dmg_premitigation.value = damage;
    other_data.dmg_onhit.value = dmg_onhit;
    other_data.dmg_dps.value = dmg_dps;
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

// For lethality and armor pen.
// document.getElementById("lethality").addEventListener("input", function () {
//     calc_lethality(true);
// });
// document.getElementById("champ_level").addEventListener("input", function () {
//     calc_lethality(true);
// });
// document.getElementById("armor_pen").addEventListener("input", function () {
//     calc_lethality(false);
// });

var inputs = document.getElementsByClassName("input");
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