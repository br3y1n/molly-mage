import { Piece } from "../../../models";
import { HeroPiece } from "./models";

class Hero implements Piece {
  private readonly isStatic: boolean = false;
  private readonly type: HeroPiece;

  constructor(type: HeroPiece) {
    this.type = type;
  }

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
}

export { Hero };
