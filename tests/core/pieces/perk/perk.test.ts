import { Piece } from "../../../../src/models";
import { PieceEnum } from "../../../../src/enums";
import { Perk } from "../../../../src/core/pieces";

describe("Perk tests:", () => {
  let piece: Piece;

  beforeEach(() => {
    piece = new Perk(PieceEnum.POISON_THROWER);
  });

  it("When getType is called, then type is T", () => {
    const type = piece.getType();

    expect(type).toEqual(PieceEnum.POISON_THROWER);
  });

  it("When getIsStatic is called, then isStatic is true", () => {
    const isStatic = piece.getIsStatic();

    expect(isStatic).toEqual(true);
  });
});
