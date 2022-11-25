import { Piece } from "../../../../models";

interface IRemotePotion extends Piece {
  getRadius: () => number;
}

export { IRemotePotion };
