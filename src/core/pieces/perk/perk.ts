import { Piece } from "../../../models";
import { PerkPiece } from "./models";

class Perk implements Piece {
  private readonly isStatic: boolean = true;
  private readonly type: PerkPiece;

  constructor(type: PerkPiece) {
    this.type = type;
  }

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
}

export { Perk };
