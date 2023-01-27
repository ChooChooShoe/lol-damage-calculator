import { Perk } from "../src/runes/perks";

export function ApplyScriptForPerk(perk: Perk) {
    if (isKey(perk.name)) {
        Scripts[perk.name](perk);
    }else {
        Generic(perk)
    }
}

function isKey(s: string): s is keyof typeof Scripts {
    if (s in Scripts) return true;
    return false
}
function Generic(perk: Perk) {

}
const Scripts = {
    Electrocute: (perk: Perk) => {
        if (perk.root_ratios && perk.root_ratios[1]) {
            // delete perk.root_ratios[1].leveling;
        }
    },
    Predator: (perk: Perk) => {
        if (perk.root_ratios && perk.root_ratios[0]) {
            perk.root_ratios[0] =
            {
                description: perk.root_ratios[0].description,
                leveling: [

                ]
            }
        }
        if (perk.root_ratios && perk.root_ratios[1]) {
            // delete perk.root_ratios[1].leveling;
        }
    },
}