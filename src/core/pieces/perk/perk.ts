import { IPerk, PerkPiece } from "./models";
import { DEFAULT_PERK_TIMEOUT } from "./constants";

class Perk implements IPerk {
  private readonly isStatic: boolean = true;
  private readonly type: PerkPiece;
  private timeout: number = DEFAULT_PERK_TIMEOUT;

  constructor(type: PerkPiece) {
    this.type = type;
  }

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
  public getTimeout = () => this.timeout;
  public decreaseTimeout = () => {
    this.timeout = this.timeout - 1;
  };
}

export { Perk };
