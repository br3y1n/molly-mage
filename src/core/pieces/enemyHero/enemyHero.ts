import { Piece } from "../../../models";
import { EnemyHeroPiece } from "./models";

class EnemyHero implements Piece {
  private readonly isStatic: boolean = false;
  private readonly type: EnemyHeroPiece;

  constructor(type: EnemyHeroPiece) {
    this.type = type;
  }

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
}

export { EnemyHero };
