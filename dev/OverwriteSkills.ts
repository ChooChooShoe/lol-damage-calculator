export const Overwrite: any = {
  Viktor: {
    skills: {
      Q: {
        subskills: [
          {
            leveling: [
              {
                // Magic Damage
              },
              {
                name: 'Shield Strength:',
                raw: '27 − 105 (based on level) (+ 18% AP)',
                damagetype: 'None',
                effectType: 'Shield',
                values: [
                  27, 31.59, 36.18, 40.76, 45.35, 49.94, 54.53, 59.12, 63.71,
                  68.29, 72.88, 77.47, 82.06, 86.65, 91.24, 95.82, 100.41, 105,
                ],
                units: '',
                sub_ratios: [
                  {
                    values: 18,
                    apply: '%',
                    units: 'AP',
                    user: 'player',
                    stat: 'total_ap',
                  },
                ],
                user: 'none',
                stat: '',
              },
            ],
          },
        ],
      },
    },
  },
};
