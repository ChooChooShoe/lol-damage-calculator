import { ChampionListSkills, StaticStats, WikiChampionData, WikiModuleChamptionData } from "../src/api/DataTypes.js";
import { fetchAndSaveRealms, fetch_Module_ChampionData, saveFile } from "./fetch_utils.js";
import { fetch_ddragon, fetch_live_wiki_skills, NeededRiotValues } from "./live_wiki_fetch.js";

console.log('Live Wiki Fetching for all data.');
const DEBUG = false;


// for (const [key, value] of Object.entries(await x)) {
//     const q = value as any
//     if(q.skill_i) q.skill_i = Object.values(q.skill_i);
//     if(q.skill_q) q.skill_q = Object.values(q.skill_q);
//     if(q.skill_w) q.skill_w = Object.values(q.skill_w);
//     if(q.skill_e) q.skill_e = Object.values(q.skill_e);
//     if(q.skill_r) q.skill_r = Object.values(q.skill_r);
//     if(q.skills ) q.skills  = Object.values(q.skills);
// }
main();
async function main() {
    const realms = fetchAndSaveRealms();
    const ModuleChampionDataFile = fetch_Module_ChampionData();

    const ChampionList: { [key: string]: WikiChampionData | null } = {};
    const SkillList: { [key: string]: ChampionListSkills | null } = {};
    const promises: Array<Promise<void>> = []
    // const ChampionModule = await fetch_mod_data();
    for (const [name, raw_data] of Object.entries(await ModuleChampionDataFile)) {
        if (raw_data.date === 'Upcoming') continue;

        ChampionList[name] = null;
        SkillList[name] = null;

        const ddragonFull = fetch_ddragon(await realms, raw_data.apiname);

        promises.push(ddragonFull.then(async riot_model => {
            SkillList[name] = await fetch_live_wiki_skills(name, riot_model as NeededRiotValues);
            ChampionList[name] = mutateWikiChampionData(name, raw_data, riot_model as NeededRiotValues);

        }).catch(e => console.log(e)));
    }
    console.log("Awaiting all Promises");
    await Promise.all(promises);
    saveFile('./src/api/ChampionList.json', ChampionList)
    saveFile('./src/api/ChampionListSkills.json', SkillList)
    console.log("Goodbye");

}


function invalidValue(val: any, type: any): never {
    throw Error(`Invalid value: Expected type '${JSON.stringify(val)}' but got ${JSON.stringify(type)}`,);
}
function mutateWikiChampionData(name: string, o: any, riot: NeededRiotValues): WikiChampionData {
    return {
        name,
        image: riot.image || { full: "", sprite: "", group: "", x: 0, y: 0, w: 0, h: 0 },
        id: test(o.id, 0),
        apiname: test(o.apiname, ''),
        title: test(o.title, ''),
        attack: test(o.attack, 0),
        defense: test(o.defense, 0),
        magic: test(o.magic, 0),
        difficulty: test(o.difficulty, 0),
        herotype: test(o.herotype, ''),
        alttype: test(o.alttype, ['', undefined]),
        resource: test(o.resource, ''),
        stats: mutateStats(o.stats),
        rangetype: test(o.rangetype, ''),
        date: test(o.date, ''),
        patch: test(o.patch, ''),
        changes: test(o.changes, ''),
        role: test(o.role, []),
        positions: test(o.positions, []),
        op_positions: test(o.op_positions, []),
        damage: test(o.damage, 0),
        toughness: test(o.toughness, 0),
        control: test(o.control, 0),
        mobility: test(o.mobility, 0),
        utility: test(o.utility, 0),
        style: test(o.style, 0),
        adaptivetype: test(o.adaptivetype, ''),
        be: test(o.be, 0),
        rp: test(o.rp, 0),
        skill_i: test(Object.values(o.skill_i || {}), []),
        skill_q: test(Object.values(o.skill_q || {}), []),
        skill_w: test(Object.values(o.skill_w || {}), []),
        skill_e: test(Object.values(o.skill_e || {}), []),
        skill_r: test(Object.values(o.skill_r || {}), []),
        skills: test(Object.values(o.skills || {}), []),
        fullname: test(o.fullname, ['', undefined]),
        nickname: test(o.nickname, ['', undefined]),
        secondary_attributes: test(o.secondary_attributes, ['', undefined]),
    }
}

type Typed = string | boolean | number | object | null | undefined;
function test(val: Typed, type: 'any'): any
function test(val: Typed, type: string): string
function test(val: Typed, type: boolean): boolean
function test(val: Typed, type: number): number
function test(val: Typed, type: null): null
function test(val: Typed, type: undefined): undefined
function test(val: Typed, type: any): any
function test(val: Typed, type: Typed): Typed {
    if (Array.isArray(type)) {
        //The type is array
        if (type.length === 0) {
            if (Array.isArray(val)) return val;
            return invalidValue(`Expected Array but got ${val}`, val);
        };

        //The type is in an array of types
        for (const itype of type) {
            try {
                return test(val, itype);
            } catch (_) { }
        }
        return invalidValue(type, val);
    }
    if (type === "any") return val;
    if (type === null) {
        if (val === null) return val;
        return invalidValue(`Expected null but got ${val}`, val);
    }
    // undefined, boolean, number, object
    if (typeof type === typeof val) {
        if (typeof type === 'string' && type.length > 0) {
            // exact string match. use '' for any string.
            if (type === val) return val;
            return invalidValue(`Exact string match to '${type}'`, val);
        }
        return val
    };
    return invalidValue(typeof type, val);
}

function mutateStats(o: any): StaticStats {
    const s = {
        hp_base: test(o.hp_base, 0),
        hp_lvl: test(o.hp_lvl, 0),
        mp_base: test(o.mp_base, 0),
        mp_lvl: test(o.mp_lvl, 0),
        arm_base: test(o.arm_base, 0),
        arm_lvl: test(o.arm_lvl, 0),
        mr_base: test(o.mr_base, 0),
        mr_lvl: test(o.mr_lvl, 0),
        hp5_base: test(o.hp5_base, 0),
        hp5_lvl: test(o.hp5_lvl, 0),
        mp5_base: test(o.mp5_base, 0),
        mp5_lvl: test(o.mp5_lvl, 0),
        dam_base: test(o.dam_base, 0),
        dam_lvl: test(o.dam_lvl, 0),

        as_base: test(o.as_base, 0),
        as_ratio: test(o.as_ratio, 0),
        as_lvl: test(o.as_lvl, 0),
        range: test(o.range, 0),
        ms: test(o.ms, 0)
    };
    // All the known optonal props.
    for (const key of ["usb_dmg_taken", "usb_dmg_dealt", "ofa_shield", "usb_healing", "usb_shielding", "missile_speed", "attack_cast_time", "attack_total_time", "attack_delay_offset", "windup_percent", "windup_modifier", "crit_base", "crit_mod", "gameplay_radius", "acquisition_radius", "selection_radius", "pathing_radius", "aram_dmg_dealt", "aram_dmg_taken", "aram_healing", "aram_shielding", "nb_dmg_dealt", "nb_dmg_taken", "nb_healing", "nb_shielding", "ofa_dmg_dealt", "ofa_dmg_taken", "ofa_healing", "ofa_shielding", "urf_dmg_dealt", "urf_dmg_taken", "urf_healing", "urf_shielding",]) {
        s[key] = test(o[key], [0, undefined]);
    }
    return s;
}
