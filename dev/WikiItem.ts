// To parse this data:
//
//   import { Convert } from "./file";
//
//   const wikiItem = Convert.toWikiItem(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface WikiItem {
    name?:       string;
    id?:         number;
    tier?:       number;
    type?:       string[];
    limit?:      string;
    maps?:       Maps;
    effects?:    Effects;
    menu?:       { [key: string]: boolean };
    stats?:      Stats;
    recipe?:     string[];
    buy?:        number;
    nickname?:   string[];
    caption?:    string;
    itemlimit?:  string;
    tags?:       Tag[];
    formatname?: string;
    sellratio?:  number;
    champion?:   string[];
    ornn?:       boolean;
    req?:        string;
    exclusive?:  string;
    sell?:       number;
}

export interface Effects {
    consume?: string;
    pass?:    Act;
    act?:     Act;
    pass2?:   Aura;
    pass3?:   Aura;
    mythic?:  MythicClass | string;
    pass4?:   Aura;
    aura?:    Aura;
}

export interface Act {
    name?:         string;
    unique?:       boolean;
    description?:  string;
    cd?:           string;
    range?:        string;
    charges?:      string;
    description2?: string;
    recharge?:     string;
    radius?:       string;
}

export interface Aura {
    name?:        string;
    unique?:      boolean;
    description?: string;
    radius?:      string;
    cd?:          string;
}

export interface MythicClass {
    ad?:        number;
    hp?:        number;
    ap?:        number;
    ms?:        number;
    ah?:        number;
    armpen?:    number;
    mpen?:      number;
    armor?:     number;
    mr?:        number;
    mpenflat?:  number;
    spec?:      string;
    spec2?:     string;
    omnivamp?:  number;
    msflat?:    number;
    as?:        number;
    lethality?: number;
}

export interface Maps {
    sr?: boolean;
    ha?: boolean;
    nb?: boolean;
    tt?: boolean;
    cs?: boolean;
}

export interface Stats {
    ah?:        number;
    hp?:        number;
    mr?:        number;
    armor?:     number;
    ap?:        number;
    mana?:      number;
    hsp?:       number;
    mp5?:       number;
    ad?:        number;
    lethality?: number;
    as?:        number;
    msflat?:    number;
    gp10?:      number;
    lifesteal?: number;
    mpen?:      number;
    crit?:      number;
    spec?:      string;
    hp5?:       number;
    omnivamp?:  number;
    ms?:        number;
    hp5flat?:   number;
    mpenflat?:  number;
    armpen?:    number;
}

export enum Tag {
    HasOnAttack = "HasOnAttack",
    HasOnHit = "HasOnHit",
    OnHitAppliesLifeSteal = "OnHitAppliesLifeSteal",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWikiItem(json: string): WikiItem[] {
        return cast(JSON.parse(json), a(r("WikiItem")));
    }

    public static wikiItemToJson(value: WikiItem[]): string {
        return JSON.stringify(uncast(value, a(r("WikiItem"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "WikiItem": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "tier", js: "tier", typ: u(undefined, 0) },
        { json: "type", js: "type", typ: u(undefined, a("")) },
        { json: "limit", js: "limit", typ: u(undefined, "") },
        { json: "maps", js: "maps", typ: u(undefined, r("Maps")) },
        { json: "effects", js: "effects", typ: u(undefined, r("Effects")) },
        { json: "menu", js: "menu", typ: u(undefined, m(true)) },
        { json: "stats", js: "stats", typ: u(undefined, r("Stats")) },
        { json: "recipe", js: "recipe", typ: u(undefined, a("")) },
        { json: "buy", js: "buy", typ: u(undefined, 0) },
        { json: "nickname", js: "nickname", typ: u(undefined, a("")) },
        { json: "caption", js: "caption", typ: u(undefined, "") },
        { json: "itemlimit", js: "itemlimit", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a(r("Tag"))) },
        { json: "formatname", js: "formatname", typ: u(undefined, "") },
        { json: "sellratio", js: "sellratio", typ: u(undefined, 3.14) },
        { json: "champion", js: "champion", typ: u(undefined, a("")) },
        { json: "ornn", js: "ornn", typ: u(undefined, true) },
        { json: "req", js: "req", typ: u(undefined, "") },
        { json: "exclusive", js: "exclusive", typ: u(undefined, "") },
        { json: "sell", js: "sell", typ: u(undefined, 0) },
    ], false),
    "Effects": o([
        { json: "consume", js: "consume", typ: u(undefined, "") },
        { json: "pass", js: "pass", typ: u(undefined, r("Act")) },
        { json: "act", js: "act", typ: u(undefined, r("Act")) },
        { json: "pass2", js: "pass2", typ: u(undefined, r("Aura")) },
        { json: "pass3", js: "pass3", typ: u(undefined, r("Aura")) },
        { json: "mythic", js: "mythic", typ: u(undefined, u(r("MythicClass"), "")) },
        { json: "pass4", js: "pass4", typ: u(undefined, r("Aura")) },
        { json: "aura", js: "aura", typ: u(undefined, r("Aura")) },
    ], false),
    "Act": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unique", js: "unique", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "cd", js: "cd", typ: u(undefined, "") },
        { json: "range", js: "range", typ: u(undefined, "") },
        { json: "charges", js: "charges", typ: u(undefined, "") },
        { json: "description2", js: "description2", typ: u(undefined, "") },
        { json: "recharge", js: "recharge", typ: u(undefined, "") },
        { json: "radius", js: "radius", typ: u(undefined, "") },
    ], false),
    "Aura": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unique", js: "unique", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "radius", js: "radius", typ: u(undefined, "") },
        { json: "cd", js: "cd", typ: u(undefined, "") },
    ], false),
    "MythicClass": o([
        { json: "ad", js: "ad", typ: u(undefined, 0) },
        { json: "hp", js: "hp", typ: u(undefined, 0) },
        { json: "ap", js: "ap", typ: u(undefined, 0) },
        { json: "ms", js: "ms", typ: u(undefined, 0) },
        { json: "ah", js: "ah", typ: u(undefined, 0) },
        { json: "armpen", js: "armpen", typ: u(undefined, 0) },
        { json: "mpen", js: "mpen", typ: u(undefined, 0) },
        { json: "armor", js: "armor", typ: u(undefined, 0) },
        { json: "mr", js: "mr", typ: u(undefined, 0) },
        { json: "mpenflat", js: "mpenflat", typ: u(undefined, 0) },
        { json: "spec", js: "spec", typ: u(undefined, "") },
        { json: "spec2", js: "spec2", typ: u(undefined, "") },
        { json: "omnivamp", js: "omnivamp", typ: u(undefined, 0) },
        { json: "msflat", js: "msflat", typ: u(undefined, 0) },
        { json: "as", js: "as", typ: u(undefined, 0) },
        { json: "lethality", js: "lethality", typ: u(undefined, 0) },
    ], false),
    "Maps": o([
        { json: "sr", js: "sr", typ: u(undefined, true) },
        { json: "ha", js: "ha", typ: u(undefined, true) },
        { json: "nb", js: "nb", typ: u(undefined, true) },
        { json: "tt", js: "tt", typ: u(undefined, true) },
        { json: "cs", js: "cs", typ: u(undefined, true) },
    ], false),
    "Stats": o([
        { json: "ah", js: "ah", typ: u(undefined, 0) },
        { json: "hp", js: "hp", typ: u(undefined, 0) },
        { json: "mr", js: "mr", typ: u(undefined, 0) },
        { json: "armor", js: "armor", typ: u(undefined, 0) },
        { json: "ap", js: "ap", typ: u(undefined, 0) },
        { json: "mana", js: "mana", typ: u(undefined, 0) },
        { json: "hsp", js: "hsp", typ: u(undefined, 0) },
        { json: "mp5", js: "mp5", typ: u(undefined, 0) },
        { json: "ad", js: "ad", typ: u(undefined, 0) },
        { json: "lethality", js: "lethality", typ: u(undefined, 0) },
        { json: "as", js: "as", typ: u(undefined, 0) },
        { json: "msflat", js: "msflat", typ: u(undefined, 0) },
        { json: "gp10", js: "gp10", typ: u(undefined, 0) },
        { json: "lifesteal", js: "lifesteal", typ: u(undefined, 0) },
        { json: "mpen", js: "mpen", typ: u(undefined, 0) },
        { json: "crit", js: "crit", typ: u(undefined, 0) },
        { json: "spec", js: "spec", typ: u(undefined, "") },
        { json: "hp5", js: "hp5", typ: u(undefined, 0) },
        { json: "omnivamp", js: "omnivamp", typ: u(undefined, 0) },
        { json: "ms", js: "ms", typ: u(undefined, 0) },
        { json: "hp5flat", js: "hp5flat", typ: u(undefined, 0) },
        { json: "mpenflat", js: "mpenflat", typ: u(undefined, 0) },
        { json: "armpen", js: "armpen", typ: u(undefined, 0) },
    ], false),
    "Tag": [
        "HasOnAttack",
        "HasOnHit",
        "OnHitAppliesLifeSteal",
    ],
};
