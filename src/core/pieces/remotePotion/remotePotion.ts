import { Piece } from "../../../models";
import { PieceEnum } from "../../../enums";

class RemotePotion implements Piece {
  private readonly isStatic: boolean = true;
  private readonly type: PieceEnum.POTION_TIMER_5 = PieceEnum.POTION_TIMER_5;

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
}

export { RemotePotion };
