import { Piece } from "../../../../models";
import { HeroPerk } from "./heroPerks.models";
import { HeroPotion } from "./heroPotions.models";
import { PerkPiece } from "../../perk/models";

interface IHero extends Piece {
  getPotions: () => HeroPotion;
  getIsThrower: () => boolean;
  getIsExploder: () => boolean;
  getIsInmune: () => boolean;
  getIsDead: () => boolean;
  setIsDead: (idDead: boolean) => void;
  getPerks: () => HeroPerk[];
  addPerk: (perk: PerkPiece) => void;
  decreasePotion: () => void;
}

export { IHero };
