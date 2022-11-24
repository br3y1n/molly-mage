import { Piece } from "../../../models";
import { PotionPiece } from "./models";

class Potion implements Piece {
  private readonly isStatic: boolean = true;
  private readonly type: PotionPiece;

  constructor(type: PotionPiece) {
    this.type = type;
  }

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
}

export { Potion };
