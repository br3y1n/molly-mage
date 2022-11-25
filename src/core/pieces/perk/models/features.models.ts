import { PerkPiece } from "./perkPiece.models";

interface PerkFeatures {
  type: PerkPiece;
  timeout?: number;
  count?: number;
}

export { PerkFeatures };
