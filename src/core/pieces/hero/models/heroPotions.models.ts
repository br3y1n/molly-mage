interface ExtraCount {
  value: number;
  added: number;
  total: number;
}

interface HeroPotion {
  timeout: number;
  normal: ExtraCount;
  remote: number;
  radius: ExtraCount;
}

export { HeroPotion };
