import { PieceEnum } from "../enums";

interface Piece {
  getIsStatic: () => boolean;
  getType: () => PieceEnum;
  update?: () => void;
}

export { Piece };
