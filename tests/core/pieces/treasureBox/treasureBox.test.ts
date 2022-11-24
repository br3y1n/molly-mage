import { Piece } from "../../../../src/models";
import { PieceEnum } from "../../../../src/enums";
import { TreasureBox } from "../../../../src/core/pieces";

describe("TreasureBox tests:", () => {
  let piece: Piece;

  beforeEach(() => {
    piece = new TreasureBox();
  });

  it("When getType is called, then type is #", () => {
    const type = piece.getType();

    expect(type).toEqual(PieceEnum.TREASURE_BOX);
  });

  it("When getIsStatic is called, then isStatic is true", () => {
    const isStatic = piece.getIsStatic();

    expect(isStatic).toEqual(true);
  });
});
