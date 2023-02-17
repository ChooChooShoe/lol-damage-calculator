<script setup lang="ts">
import type { SkillData } from '@/api/DataTypes';
import TextTip from './TextTip.vue';
defineProps<{ skill: SkillData }>();
</script>

<template>
  <div class="ability-info-container">
    <div class="champion-ability__header">
      <!-- <h3>{{ skill.display_name || skill.name }} ({{ skill.skill }})</h3> -->

      <div class="champion-ability infobox">
        <!-- <image source="skill.primary_icon" /> -->

        <div class="group" name="champion-ability-params">
          <data v-if="skill.cost">
            <span class="data-label">COST: </span>

            <span class="format"
              >{{ skill.cost }} {{ skill.costtype || 'Mana' }}
            </span>
          </data>

          <data v-if="skill.cooldown">
            <!-- <span
              >((tt|((#switch:((cdstart|}}|on-cast = <sup>• </sup>|post-effect =
              <sub>• </sub>|}}COOLDOWN|((#switch:((cdstart|}}|on-cast
              =On-cast|post-effect =Post-effect|}}}:
            </span> -->
            <span class="data-label">
              <!-- <TextTip tooltip="On-cast"> <sup>• </sup>COOLDOWN</TextTip>: -->
              <!-- <TextTip tooltip="Post-effect"> <sup>• </sup>COOLDOWN</TextTip>: -->
              COOLDOWN:
            </span>

            <span class="format" v-html="skill.cooldown"></span>
          </data>

          <data v-if="skill.cast_time">
            <span class="data-label">CAST TIME: </span>

            <span
              class="format"
              v-html="skill.cast_time === 'false' ? 'None' : skill.cast_time"
            ></span>
          </data>

          <data v-if="skill.static">
            <span
              >((#switch:((cdstart|}}|on-cast = <sup>• </sup>|post-effect =
              <sub>• </sub>|}}((tt|STATIC|Unaffected by ability haste}}
              ((tt|COOLDOWN|((#switch:((cdstart|}}|on-cast =On-cast|post-effect
              =Post-effect|}}}:
            </span>

            <span class="format" v-html="skill.static"></span>
          </data>

          <data v-if="skill.ontargetcdstatic">
            <span
              ><TextTip tooltip="Unaffected by ability haste" class="data-label"
                >TARGET IMMUNITY</TextTip
              >:</span
            >

            <span class="format" v-html="skill.ontargetcdstatic"></span>
          </data>

          <data v-if="skill.ontargetcd">
            <span
              ><TextTip tooltip="Unaffected by ability haste" class="data-label"
                >TARGET IMMUNITY</TextTip
              >:</span
            >

            <span class="format" v-html="skill.ontargetcd"></span>
          </data>

          <data v-if="skill.recharge">
            <span class="data-label">RECHARGE: </span>

            <span class="format" v-html="skill.recharge"></span>
          </data>

          <data v-if="skill.rechargestatic">
            <span class="data-label">
              <TextTip tooltip="Unaffected by ability haste"
                >STATIC RECHARGE</TextTip
              >:
            </span>

            <span class="format" v-html="skill.rechargestatic"></span>
          </data>

          <data v-if="skill.target_range">
            <span class="data-label">TARGET RANGE: </span>

            <span class="format" v-html="skill.target_range"></span>
          </data>

          <data v-if="skill.range">
            <span class="data-label">RANGE: </span>

            <span class="format" v-html="skill.range"> </span>
          </data>

          <data v-if="skill.attack_range">
            <span class="data-label">ATTACK RANGE: </span>

            <span class="format" v-html="skill.attack_range"></span>
          </data>

          <!-- <data v-if="skill.ai_range">
            <span class="data-label">ACQUISITION RANGE: </span>

            <span class="format">{{ skill.ai_range }} </span>
          </data> -->

          <!-- <data v-if="skill.windup">
            <span class="data-label">WINDUP PERCENTAGE: </span>

            <span class="format">{{ skill.windup }}%</span>
          </data> -->

          <data v-if="skill.travel_distance">
            <span class="data-label">TRAVEL DISTANCE: </span>

            <span class="format" v-html="skill.travel_distance"></span>
          </data>

          <data v-if="skill.collision_radius">
            <span class="data-label">COLLISION RADIUS: </span>

            <span class="format" v-html="skill.collision_radius"></span>
          </data>

          <data v-if="skill.effect_radius">
            <span class="data-label">EFFECT RADIUS: </span>

            <span class="format" v-html="skill.effect_radius"></span>
          </data>

          <data v-if="skill.width">
            <span class="data-label">WIDTH: </span>

            <span class="format" v-html="skill.width"></span>
          </data>

          <data v-if="skill.angle">
            <span class="data-label">ANGLE: </span>

            <span class="format" v-html="skill.angle"></span>
          </data>

          <data v-if="skill.inner_radius">
            <span class="data-label">INNER RADIUS: </span>

            <span class="format" v-html="skill.inner_radius"></span>
          </data>

          <data v-if="skill.tether_radius">
            <span class="data-label">TETHER RADIUS: </span>

            <span class="format" v-html="skill.tether_radius"> </span>
          </data>

          <data v-if="skill.speed">
            <span class="data-label">SPEED: </span>

            <span class="format" v-html="skill.speed"></span>
          </data>

          <data v-if="skill.custominfo">
            <span class="data-label">{{ skill.customlabel }}: </span>

            <span class="format" v-html="skill.custominfo"></span>
          </data>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<style>
.data-label {
  display: inline-block;
  overflow: initial;
  color: #9797fc;
  padding-left: 5px;
}
.format {
  text-transform: uppercase;
  display: inline-block;
  padding-left: 5px;
}
</style>
