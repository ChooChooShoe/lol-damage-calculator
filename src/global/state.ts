import { reactive } from "vue";
import { ChampObjModel } from "../model/ChampObj";
import { DamageSource } from "../javascript/league_data";


export const player = reactive<ChampObjModel>(new ChampObjModel('player', 'Ashe'));
export const target = reactive<ChampObjModel>(new ChampObjModel('target', 'Zoe'));
export const playerStatusEffects = reactive<{ [key: string]: StatusEffect }>({});
export const damageSources: { [key: string]: DamageSource[] } = reactive({});


export class StatusEffect {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}