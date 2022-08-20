import { Perk } from "./perks";

export function Electrocute(perk: Perk) {
    if (perk.root_ratios && perk.root_ratios[0]) {
        perk.root_ratios[0] =
        {
            description: perk.root_ratios[0].description,
            leveling: [

            ]
        }
    }
    if (perk.root_ratios && perk.root_ratios[1]) {
        delete perk.root_ratios[1].leveling;
    }
}