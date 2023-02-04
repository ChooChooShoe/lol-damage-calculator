<template>
  <div>
    <CommonRune v-if="primaryStyle[0]" :p="perk(primaryStyle[0])!"></CommonRune>
    <CommonRune v-if="primaryStyle[1]" :p="perk(primaryStyle[1])!"></CommonRune>
    <CommonRune v-if="primaryStyle[2]" :p="perk(primaryStyle[2])!"></CommonRune>
    <CommonRune v-if="primaryStyle[3]" :p="perk(primaryStyle[3])!"></CommonRune>
    <CommonRune
      v-if="secondaryStyle[0]"
      :p="perk(secondaryStyle[0])!"
    ></CommonRune>
    <CommonRune
      v-if="secondaryStyle[1]"
      :p="perk(secondaryStyle[1])!"
    ></CommonRune>
  </div>
</template>

<script setup lang="ts">
import { perk } from './perks';
import CommonRune from './perks/CommonRune.vue';

// const perkComponents = { Precision: { keyStone: [PresstheAttack, LethalTempo, FleetFootwork, Conqueror], mixed1: [Overheal, Triumph, PresenceofMind], mixed2: [LegendAlacrity, LegendTenacity, LegendBloodline], mixed3: [CoupdeGrace, CutDown, LastStand] }, Domination: { keyStone: [Electrocute, Predator, DarkHarvest, HailofBlades], mixed1: [CheapShot, TasteofBlood, SuddenImpact], mixed2: [ZombieWard, GhostPoro, EyeballCollection], mixed3: [TreasureHunter, IngeniousHunter, RelentlessHunter, UltimateHunter] }, Sorcery: { keyStone: [SummonAery, ArcaneComet, PhaseRush], mixed1: [NullifyingOrb, ManaflowBand, NimbusCloak], mixed2: [Transcendence, Celerity, AbsoluteFocus], mixed3: [Scorch, Waterwalking, GatheringStorm] }, Inspiration: { keyStone: [GlacialAugment, UnsealedSpellbook, FirstStrike], mixed1: [HextechFlashtraption, MagicalFootwear, PerfectTiming], mixed2: [FuturesMarket, MinionDematerializer, BiscuitDelivery], mixed3: [CosmicInsight, ApproachVelocity, TimeWarpTonic] }, Resolve: { keyStone: [GraspoftheUndying, Aftershock, Guardian], mixed1: [Demolish, FontofLife, ShieldBash], mixed2: [Conditioning, SecondWind, BonePlating], mixed3: [Overgrowth, Revitalize, Unflinching] } };
// const perkComponents: { [k: number]: any } = { 8005: PresstheAttack, 8008: LethalTempo, 8009: PresenceofMind, 8010: Conqueror, 8014: CoupdeGrace, 8017: CutDown, 8021: FleetFootwork, 8105: RelentlessHunter, 8106: UltimateHunter, 8112: Electrocute, 8120: GhostPoro, 8124: Predator, 8126: CheapShot, 8128: DarkHarvest, 8134: IngeniousHunter, 8135: TreasureHunter, 8136: ZombieWard, 8138: EyeballCollection, 8139: TasteofBlood, 8143: SuddenImpact, 8210: Transcendence, 8214: SummonAery, 8224: NullifyingOrb, 8226: ManaflowBand, 8229: ArcaneComet, 8230: PhaseRush, 8232: Waterwalking, 8233: AbsoluteFocus, 8234: Celerity, 8236: GatheringStorm, 8237: Scorch, 8242: Unflinching, 8275: NimbusCloak, 8299: LastStand, 8304: MagicalFootwear, 8306: HextechFlashtraption, 8313: PerfectTiming, 8316: MinionDematerializer, 8321: FuturesMarket, 8345: BiscuitDelivery, 8347: CosmicInsight, 8351: GlacialAugment, 8352: TimeWarpTonic, 8360: UnsealedSpellbook, 8369: FirstStrike, 8401: ShieldBash, 8410: ApproachVelocity, 8429: Conditioning, 8437: GraspoftheUndying, 8439: Aftershock, 8444: SecondWind, 8446: Demolish, 8451: Overgrowth, 8453: Revitalize, 8463: FontofLife, 8465: Guardian, 8473: BonePlating, 9101: Overheal, 9103: LegendBloodline, 9104: LegendAlacrity, 9105: LegendTenacity, 9111: Triumph, 9923: HailofBlades };
// const perkComponents: { [k: number]: any } = { 8005: CommonRune, 8008: CommonRune, 8009: CommonRune, 8010: CommonRune, 8014: CommonRune, 8017: CommonRune, 8021: CommonRune, 8105: CommonRune, 8106: CommonRune, 8112: CommonRune, 8120: CommonRune, 8124: CommonRune, 8126: CommonRune, 8128: CommonRune, 8134: CommonRune, 8135: CommonRune, 8136: CommonRune, 8138: CommonRune, 8139: CommonRune, 8143: CommonRune, 8210: CommonRune, 8214: CommonRune, 8224: CommonRune, 8226: CommonRune, 8229: CommonRune, 8230: CommonRune, 8232: CommonRune, 8233: CommonRune, 8234: CommonRune, 8236: CommonRune, 8237: CommonRune, 8242: CommonRune, 8275: CommonRune, 8299: CommonRune, 8304: CommonRune, 8306: CommonRune, 8313: CommonRune, 8316: CommonRune, 8321: CommonRune, 8345: CommonRune, 8347: CommonRune, 8351: CommonRune, 8352: CommonRune, 8360: CommonRune, 8369: CommonRune, 8401: CommonRune, 8410: CommonRune, 8429: CommonRune, 8437: CommonRune, 8439: CommonRune, 8444: CommonRune, 8446: CommonRune, 8451: CommonRune, 8453: CommonRune, 8463: CommonRune, 8465: CommonRune, 8473: CommonRune, 9101: CommonRune, 9103: CommonRune, 9104: CommonRune, 9105: CommonRune, 9111: CommonRune, 9923: CommonRune };

// type Style = keyof typeof perkComponents;
const props = defineProps<{
  primaryStyle: [number, number, number, number];
  secondaryStyle: [number, number];
}>();
</script>
