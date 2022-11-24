import { Piece } from "../../../models";
import { PieceEnum } from "../../../enums";

class TreasureBox implements Piece {
  private readonly isStatic: boolean = true;
  private readonly type: PieceEnum.TREASURE_BOX = PieceEnum.TREASURE_BOX;

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
}

export { TreasureBox };
