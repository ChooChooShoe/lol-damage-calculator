import type { ChampionName } from '../ChampionListData';
import { clearDescRatios } from '../GenHelpers';

export const name: ChampionName = 'Bard';

import Bard from './Bard.gen';

// Bard["Caretaker's Shrine"].description[0].levelingRatios[0].effectType = 'Heal';
// Bard["Caretaker's Shrine"].description[0].levelingRatios[0].healType =
//   'OutgoingHeals';

clearDescRatios(
  Bard,
  "Caretaker's Shrine",
  'Magical Journey',
  "Traveler's Call"
);
export { Bard };
