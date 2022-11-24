import { PieceEnum } from "../enums";

interface Piece {
  getIsStatic: () => boolean;
  getType: () => PieceEnum;
}

export { Piece };
