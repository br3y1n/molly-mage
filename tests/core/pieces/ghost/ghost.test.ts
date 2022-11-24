import { Piece } from "../../../../src/models";
import { PieceEnum } from "../../../../src/enums";
import { Ghost } from "../../../../src/core/pieces";

describe("Ghost tests:", () => {
  let piece: Piece;

  beforeEach(() => {
    piece = new Ghost();
  });

  it("When getType is called, then type is &", () => {
    const type = piece.getType();

    expect(type).toEqual(PieceEnum.GHOST);
  });

  it("When getIsStatic is called, then isStatic is false", () => {
    const isStatic = piece.getIsStatic();

    expect(isStatic).toEqual(false);
  });
});
