import { Piece } from "../../../models";
import { PieceEnum } from "../../../enums";

class Ghost implements Piece {
  private readonly isStatic: boolean = false;
  private readonly type: PieceEnum.GHOST = PieceEnum.GHOST;

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
}

export { Ghost };
