import { Piece } from "../../../../src/models";
import { PieceEnum } from "../../../../src/enums";
import { Potion } from "../../../../src/core/pieces";

describe("Potion tests:", () => {
  let piece: Piece;

  beforeEach(() => {
    piece = new Potion(PieceEnum.POTION_TIMER_4);
  });

  it("When getType is called, then type is 4", () => {
    const type = piece.getType();

    expect(type).toEqual(PieceEnum.POTION_TIMER_4);
  });

  it("When getIsStatic is called, then isStatic is true", () => {
    const isStatic = piece.getIsStatic();

    expect(isStatic).toEqual(true);
  });
});
