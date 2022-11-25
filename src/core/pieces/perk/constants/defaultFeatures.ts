import { PerkFeatures, PerkPiece } from "../models";
import { PieceEnum } from "../../../../enums";
import { DEFAULT_PERK_TIMEOUT } from "./defaultTimeout";

const DEFAULT_PERKS_FEATURES: Record<PerkPiece, PerkFeatures> = {
  [PieceEnum.POISON_THROWER]: {
    type: PieceEnum.POISON_THROWER,
    timeout: DEFAULT_PERK_TIMEOUT,
  },
  [PieceEnum.POTION_COUNT_INCREASE]: {
    type: PieceEnum.POTION_COUNT_INCREASE,
    timeout: DEFAULT_PERK_TIMEOUT,
    count: 4,
  },
  [PieceEnum.POTION_BLAST_RADIUS_INCREASE]: {
    type: PieceEnum.POTION_BLAST_RADIUS_INCREASE,
    timeout: DEFAULT_PERK_TIMEOUT,
    count: 2,
  },
  [PieceEnum.POTION_EXPLODER]: {
    type: PieceEnum.POTION_EXPLODER,
    timeout: DEFAULT_PERK_TIMEOUT,
    count: 1,
  },
  [PieceEnum.POTION_IMMUNE]: {
    type: PieceEnum.POTION_IMMUNE,
    timeout: DEFAULT_PERK_TIMEOUT,
  },
  [PieceEnum.POTION_REMOTE_CONTROL]: {
    type: PieceEnum.POTION_REMOTE_CONTROL,
    count: 3,
  },
};

export { DEFAULT_PERKS_FEATURES };
