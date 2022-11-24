import { Piece } from "../../../../src/models";
import { PieceEnum } from "../../../../src/enums";
import { Hero } from "../../../../src/core/pieces";

describe("Hero tests:", () => {
  let piece: Piece;

  beforeEach(() => {
    piece = new Hero(PieceEnum.HERO);
  });

  it("When getType is called, then type is ☺", () => {
    const type = piece.getType();

    expect(type).toEqual(PieceEnum.HERO);
  });

  it("When getIsStatic is called, then isStatic is false", () => {
    const isStatic = piece.getIsStatic();

    expect(isStatic).toEqual(false);
  });
});
