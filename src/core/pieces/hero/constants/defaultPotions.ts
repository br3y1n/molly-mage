import { HeroPotion } from "../models";

const DEFAULT_RADIUS = 3;

const DEFAULT_HERO_POTIONS: HeroPotion = {
  timeout: 0,
  normal: { value: 1, added: 0, total: 1 },
  remote: 0,
  radius: { value: DEFAULT_RADIUS, added: 0, total: 3 },
};

export { DEFAULT_HERO_POTIONS, DEFAULT_RADIUS };
