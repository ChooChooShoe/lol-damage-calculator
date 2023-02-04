export const Overwrite: any = {
  styles: {},
  perks: {
    '5001': { stats: { HealthScaling: [15, 140] } },
    '5002': { stats: { armor: 6 } },
    '5003': { stats: { mr: 8 } },
    '5005': { stats: { as: 10 } },
    '5007': { stats: { ah: 8 } },
    '5008': { stats: { Adaptive: 9 } },
  },
};

export function dynamicOverwrites(data: any) {
  // Remove subskills[0] from Fleet Footwork
  // data.perks["8021"].subskills[0].leveling = [];
  // data.perks["8021"].subskills[0].leveling[0].units = "healing";
  // data.perks["8021"].subskills[0].leveling[0].stat = "";
}
