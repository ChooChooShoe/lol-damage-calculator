<script setup lang="ts">
import type { SkillData } from '@/api/DataTypes';
import TextTip from './TextTip.vue';
defineProps<{ skill: SkillData }>();
</script>

<template>
  <div class="ability-info-container">
    <div class="champion-ability__header">
      <h3>{{ skill.display_name || skill.name }}</h3>

      <infobox theme="champion-ability">
        <title>
          <default>{{ skill.display_name || skill.name }}
          </default>
        </title>

        <!-- <image source="skill.primary_icon" /> -->

        <group name="champion-ability-params">
          <data v-if="skill.cost">
            <label>COST: </label>

            <span class="format"
              >{{ skill.cost }} {{ skill.costtype || 'Mana' }}
            </span>
          </data>

          <data v-if="skill.cooldown">
            <!-- <label
              >((tt|((#switch:((cdstart|}}|on-cast = <sup>• </sup>|post-effect =
              <sub>• </sub>|}}COOLDOWN|((#switch:((cdstart|}}|on-cast
              =On-cast|post-effect =Post-effect|}}}:
            </label> -->
            <label>
              <!-- <TextTip tooltip="On-cast"> <sup>• </sup>COOLDOWN</TextTip>: -->
              <!-- <TextTip tooltip="Post-effect"> <sup>• </sup>COOLDOWN</TextTip>: -->
              COOLDOWN:
            </label>

            <span class="format" v-html="skill.cooldown"></span>
          </data>

          <data v-if="skill.cast_time">
            <label>CAST TIME: </label>

            <span class="format"
              >{{ skill.cast_time === 'false' ? 'None' : skill.cast_time }}
            </span>
          </data>

          <data v-if="skill.static">
            <label
              >((#switch:((cdstart|}}|on-cast = <sup>• </sup>|post-effect =
              <sub>• </sub>|}}((tt|STATIC|Unaffected by ability haste}}
              ((tt|COOLDOWN|((#switch:((cdstart|}}|on-cast =On-cast|post-effect
              =Post-effect|}}}:
            </label>

            <span class="format">{{ skill.static }} </span>
          </data>

          <data v-if="skill.ontargetcdstatic">
            <label
              ><TextTip tooltip="Unaffected by ability haste"
                >TARGET IMMUNITY</TextTip
              >:</label
            >

            <span class="format">{{ skill.ontargetcdstatic }} </span>
          </data>

          <data v-if="skill.ontargetcd">
            <label>((tt|TARGET IMMUNITY|Affected by ability haste}}: </label>

            <span class="format">{{ skill.ontargetcd }} </span>
          </data>

          <data v-if="skill.recharge">
            <label>RECHARGE: </label>

            <span class="format">{{ skill.recharge }} </span>
          </data>

          <data v-if="skill.rechargestatic">
            <label>
              <TextTip tooltip="Unaffected by ability haste"
                >STATIC RECHARGE</TextTip
              >:
            </label>

            <span class="format">{{ skill.rechargestatic }} </span>
          </data>

          <data v-if="skill.target_range">
            <label>TARGET RANGE: </label>

            <span class="format">{{ skill.target_range }} </span>
          </data>

          <data v-if="skill.range">
            <label>RANGE: </label>

            <span class="format">{{ skill.range }} </span>
          </data>

          <data v-if="skill.attack_range">
            <label>ATTACK RANGE: </label>

            <span class="format">{{ skill.attack_range }} </span>
          </data>

          <!-- <data v-if="skill.ai_range">
            <label>ACQUISITION RANGE: </label>

            <span class="format">{{ skill.ai_range }} </span>
          </data> -->

          <!-- <data v-if="skill.windup">
            <label>WINDUP PERCENTAGE: </label>

            <span class="format">{{ skill.windup }}%</span>
          </data> -->

          <data v-if="skill.travel_distance">
            <label>TRAVEL DISTANCE: </label>

            <span class="format">{{ skill.travel_distance }}</span>
          </data>

          <data v-if="skill.collision_radius">
            <label>COLLISION RADIUS: </label>

            <span class="format">{{ skill.collision_radius }}</span>
          </data>

          <data v-if="skill.effect_radius">
            <label>EFFECT RADIUS: </label>

            <span class="format">{{ skill.effect_radius }} </span>
          </data>

          <data v-if="skill.width">
            <label>WIDTH: </label>

            <span class="format">{{ skill.width }} </span>
          </data>

          <data v-if="skill.angle">
            <label>ANGLE: </label>

            <span class="format">{{ skill.angle }} </span>
          </data>

          <data v-if="skill.inner_radius">
            <label>INNER RADIUS: </label>

            <span class="format">{{ skill.inner_radius }} </span>
          </data>

          <data v-if="skill.tether_radius">
            <label>TETHER RADIUS: </label>

            <span class="format">{{ skill.tether_radius }} </span>
          </data>

          <data v-if="skill.speed">
            <label>SPEED: </label>

            <span class="format">{{ skill.speed }} </span>
          </data>

          <data v-if="skill.custominfo">
            <label>{{ skill.customlabel }}: </label>

            <span class="format">{{ skill.custominfo }} </span>
          </data>
        </group>
      </infobox>
    </div>
  </div>
</template>

<style></style>
