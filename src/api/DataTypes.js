'use strict';
exports.__esModule = true;
exports.RatioUnits =
  exports.usesSerpentsFang =
  exports.usesGrievousWounds =
  exports.usesRevitalize =
  exports.usesSpiritVisage =
  exports.usesHealShieldPower =
  exports.SpellshieldText =
    void 0;
exports.SpellshieldText = ['Blocked', 'Not Blocked', 'See Notes', 'Missing'];
function usesHealShieldPower(shieldOrHeal) {
  return (
    shieldOrHeal === 'DrainEffect' ||
    shieldOrHeal === 'SelfHeal' ||
    shieldOrHeal === 'SelfShield' ||
    shieldOrHeal === 'OutgoingHeals' ||
    shieldOrHeal === 'OutgoingShields'
  );
}
exports.usesHealShieldPower = usesHealShieldPower;
function usesSpiritVisage(shieldOrHeal) {
  return (
    shieldOrHeal !== 'OutgoingHeals' &&
    shieldOrHeal !== 'OutgoingShields' &&
    shieldOrHeal !== 'BonusHealth'
  );
}
exports.usesSpiritVisage = usesSpiritVisage;
function usesRevitalize(shieldOrHeal) {
  return shieldOrHeal !== 'HealthRegen' && shieldOrHeal !== 'BonusHealth';
}
exports.usesRevitalize = usesRevitalize;
function usesGrievousWounds(shieldOrHeal) {
  return (
    shieldOrHeal !== 'SelfShield' &&
    shieldOrHeal !== 'IncomingShields' &&
    shieldOrHeal !== 'OutgoingShields' &&
    shieldOrHeal !== 'OutgoingHeals' &&
    shieldOrHeal !== 'BonusHealth'
  );
}
exports.usesGrievousWounds = usesGrievousWounds;
function usesSerpentsFang(shieldOrHeal) {
  return shieldOrHeal == 'SelfShield' || shieldOrHeal !== 'IncomingShields';
}
exports.usesSerpentsFang = usesSerpentsFang;
var RatioUnits;
(function (RatioUnits) {
  RatioUnits['Ad'] = 'AD';
  RatioUnits['Ap'] = 'AP';
  RatioUnits['Armor'] = 'armor';
  RatioUnits['BonusHealth'] = 'bonus health';
  RatioUnits['Bonusad'] = 'bonus AD';
  RatioUnits['ChunksOfIce'] = 'chunks of ice';
  RatioUnits['Empty'] = '';
  RatioUnits['MaximumHealth'] = 'maximum health';
  RatioUnits['MissingHealth'] = 'missing health';
  RatioUnits['OfDamageDealt'] = 'of damage dealt';
  RatioUnits['OfDamageTaken'] = 'of damage taken';
  RatioUnits['OfHisMaximumHealth'] = 'of his maximum health';
  RatioUnits['OfMaximumHealth'] = 'of maximum health';
  RatioUnits['OfMissingHealth'] = 'of missing health';
  RatioUnits['OfMissingMana'] = 'of missing mana';
  RatioUnits['OfTargetSArmor'] = "of target's armor";
  RatioUnits['OfTargetSCurrentHealth'] = "of target's current health";
  RatioUnits['OfTargetSMaximumHealth'] = "of target's maximum health";
  RatioUnits['OfTargetSMissingHealth'] = "of target's missing health";
  RatioUnits['OfTaricSArmor'] = "of Taric's armor";
  RatioUnits['OfTheTargetSMaximumHealth'] = "of the target's maximum health";
  RatioUnits['OfTurretSMaximumHealth'] = "of turret's maximum health";
  RatioUnits['PerSoulCollected'] = 'per  Soul collected';
  RatioUnits['Soldiers'] = 'soldiers';
  RatioUnits['Units'] = '\u00D7';
  RatioUnits['UnitsUnits'] = 'units';
  RatioUnits['X23'] = 'x23';
})((RatioUnits = exports.RatioUnits || (exports.RatioUnits = {})));
