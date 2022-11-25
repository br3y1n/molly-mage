import { PerkPiece } from "../../perk/models";

interface HeroPerk {
  type: PerkPiece;
  timeout?: number;
  count?: number;
}

export { HeroPerk };
