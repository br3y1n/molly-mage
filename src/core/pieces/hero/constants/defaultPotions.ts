import { HeroPotion } from "../models";

const DEFAULT_HERO_POTIONS: HeroPotion = {
  timeout: 0,
  normal: { value: 1, added: 0, total: 1 },
  remote: 0,
  radius: { value: 3, added: 0, total: 3 },
};

export { DEFAULT_HERO_POTIONS };
