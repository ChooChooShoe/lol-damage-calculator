
export function damage_type_user(damage_type) {
  switch (damage_type) {
    case "physical":
      return `<span class="ad">physical damage</span>`;
    case "magic":
      return `<span class="ap">magic damage</span>`;
    case "true":
      return `<span class="true">true damage</span>`;
    case "heal":
      return `<span class="shield">healing</span>`
    case "shield":
      return `<span class="shield">shielding</span>`
    case "unknown":
      return `<span class="true">unknown damage</span>`
    default:
      return `<span class="true">non-damaging ability</span>`;
  }
}