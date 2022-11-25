import { Piece } from "../../../../models";

interface IPerk extends Piece {
  getTimeout: () => number;
  decreaseTimeout: () => void;
}

export { IPerk };
