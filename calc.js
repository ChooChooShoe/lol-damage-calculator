var main_div = document.getElementById("main");
var champion_data = document.forms.champion_data_form;
var target_data = document.forms.target_data_form;
var other_data = document.forms.other_data_form;

var spell_data = [document.forms.spell_data_q_form];
var spell_data_index = 0;

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

function calc_spell(data) {
    console.log("Caculating a spell");
    var base_damage = asNumber(data.base_damage);
    var ap_ratio = asPercent(data.ap_ratio);

    var total_ad_ratio = asPercent(data.total_ad_ratio);
    var bonus_ad_ratio = asPercent(data.bonus_ad_ratio);

    var d = recalc();

    var damage = (base_damage + (data.ap * ap_ratio) + (data.total_ad * total_ad_ratio) + (data.bonus_ad * bonus_ad_ratio));
    var dmg_onhit = damage * (100 / (100 + data.mr));
    var dmg_dps = 0; // dmg_onhit * (1 / cooldown);


    data.dmg_premitigation.value = damage;
    data.dmg_onhit.value = dmg_onhit;
    data.dmg_dps.value = dmg_dps;
}

function recalc() {
    console.log("Caculating");
    var percent_magic_pen;
    if (champion_data.has_void_staff.checked) {
            percent_magic_pen_value.innerHTML = "&nbsp = 40% Magic Pen.";
            percent_magic_pen= 0.40;
        } else {
            percent_magic_pen_value.innerHTML = "&nbsp = 0% Magic Pen.";
            percent_magic_pen= 0.0;
        }
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

        percent_armor_pen: asPercent(champion_data.percent_armor_pen),

        flat_magic_pen: asNumber(champion_data.flat_magic_pen),
        spell_vamp: asPercent(champion_data.spell_vamp),

        lethality: asNumber(champion_data.lethality),
        champ_level: asNumber(champion_data.champ_level),
        armor_pen: asNumber(champion_data.armor_pen),

        mr: asNumber(target_data.target_mr) * (1.0 - percent_magic_pen) - flat_magic_pen,

        armor: asNumber(target_data.target_armor) * (1.0 - percent_armor_pen) - armor_pen,
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

var inputs = champion_data.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.backgroundColor = "red";
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
    var cloned = document.getElementById("spell_data_0").cloneNode(true);
    spell_data_index++;
    cloned.id = "spell_data_" + (spell_data_index);

    var form = cloned.getElementsByTagName("form")[0];
    form.name = "spell_data_" + (spell_data_index) + "_form";

    var idx = spell_data_index;
    var f = function () {
        calc_spell(form, idx);
    };
    var inputs = cloned.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "blue";
        inputs[i].addEventListener("input", f);
    }

    main_div.appendChild(cloned);
}