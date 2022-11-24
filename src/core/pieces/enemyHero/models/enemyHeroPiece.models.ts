import { PieceEnum } from "../../../../enums";

type EnemyHeroPiece =
  | PieceEnum.ENEMY_HERO_DEAD
  | PieceEnum.ENEMY_HERO
  | PieceEnum.OTHER_HERO
  | PieceEnum.OTHER_HERO_DEAD;

export { EnemyHeroPiece };
