import { PieceEnum } from "../../../../enums";
import { HeroPiece } from "../models";

const DEAD_HEROES: HeroPiece[] = [
  PieceEnum.OTHER_HERO_DEAD,
  PieceEnum.ENEMY_HERO_DEAD,
  PieceEnum.HERO_DEAD,
];

export { DEAD_HEROES };
