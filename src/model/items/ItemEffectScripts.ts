import type { RootRatio } from '@/api/DataTypes';
import itemsGen, { type Act, type ItemGenData } from './items.gen';

export const ItemEffectsScripts = {
  'Thirsting Slash': {
    itemData: itemsGen['6630'],
    effectData: itemsGen['6630'].effects.act,
    icon: itemsGen['6630'].iconPath,
    description: 'aa',
    descriptionHTML:
      '<span class="template_sbc"><b>Unique – <a href="/wiki/Named_item_effect#Thirsting_Slash" title="Named item effect">Thirsting Slash</a>:</b></span> Deal <span style="color:orange; white-space:normal">175% <b>base</b> AD</span> <span style="color: #FF8C34; white-space:normal">physical damage</span> to enemies in a <span class="glossary tooltips-init-complete" style="white-space:pre; position:relative;" data-game="lol" data-tip="Cr"><a href="/wiki/Range"><img alt="Range center" src="https://static.wikia.nocookie.net/leagueoflegends/images/c/cf/Range_center.png/revision/latest/scale-to-width-down/20?cb=20150616134211" decoding="async" loading="lazy" data-image-name="Range center.png" data-image-key="Range_center.png" width="20" height="20"></a></span> 450 radius centered around you. <span class="glossary tooltips-init-complete" style="white-space:pre; position:relative;" data-game="lol" data-tip="Heal"><a href="/wiki/Healing"><img alt="Heal power icon" src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e7/Heal_power_icon.png/revision/latest/scale-to-width-down/20?cb=20170909150244" decoding="async" loading="lazy" data-image-name="Heal power icon.png" data-image-key="Heal_power_icon.png" width="20" height="20"></a> <a href="/wiki/Healing">Heal</a></span> for <span style="color:orange; white-space:normal">20% AD</span> <span style="color: #1F995C; white-space:normal">(+&nbsp;8% of your <b>missing</b> health)</span> for each enemy champion hit (15 (reduced by ability haste) second cooldown).',
    descriptionRatios: [
      {
        name: 'Physical Damage',
        effectType: 'Damage',
        damagetype: 'Physical',
        values: 175,
        valuesIsPercent: true,
        units: 'base_ad',
        unitsText: '<b>base</b> AD',
      },
      {
        name: 'Heal',
        effectType: 'Heal',
        healType: 'DrainEffect',
        values: 20,
        valuesIsPercent: true,
        units: 'total_ad',
        unitsText: 'AD',
        children: [
          {
            values: 8,
            valuesIsPercent: true,
            units: 'missing_hp',
            user: 'player',
            unitsText: 'of your <b>missing</b> heath',
          },
        ],
        post: 'for each enemy champion hit.',
      },
    ],
    hidden: false,
    locked: true,
  },
} satisfies { [k: string]: ItemEffectsScript };

export interface ItemEffectsScript {
  itemData: ItemGenData;
  effectData: Act;
  icon?: string;
  description: string;
  descriptionHTML: string;
  descriptionRatios: RootRatio[];
  hidden?: boolean;
  locked?: boolean;
}
