import { PieceEnum } from "../../../../enums";

type HeroPiece =
  | PieceEnum.HERO
  | PieceEnum.HERO_DEAD
  | PieceEnum.ENEMY_HERO
  | PieceEnum.ENEMY_HERO_DEAD
  | PieceEnum.OTHER_HERO
  | PieceEnum.OTHER_HERO_DEAD;

export { HeroPiece };
