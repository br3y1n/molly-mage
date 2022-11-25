import { PieceEnum } from "../../../enums";
import { IHero } from "../hero/models";
import { DEFAULT_RADIUS } from "../hero/constants";
import { IRemotePotion } from "./models";

class RemotePotion implements IRemotePotion {
  private readonly isStatic: boolean = true;
  private readonly type: PieceEnum.POTION_TIMER_5 = PieceEnum.POTION_TIMER_5;
  private radius: number = DEFAULT_RADIUS;
  private owner?: IHero;

  constructor(owner?: IHero) {
    this.owner = owner;
  }

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
  public getRadius = () => this.radius;

  public update = () => {
    this._updateRadius();
  };

  private _updateRadius = () => {
    if (this.owner === undefined) return;

    if (this.owner.getIsDead()) {
      this.owner = undefined;
      return;
    }

    this.radius = this.owner.getPotions().radius.total;
  };
}

export { RemotePotion };
