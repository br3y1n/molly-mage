import { Piece } from "../../../models";
import { PieceEnum } from "../../../enums";

class Wall implements Piece {
  private readonly isStatic: boolean = true;
  private readonly type: PieceEnum.WALL = PieceEnum.WALL;

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
}

export { Wall };
