import { Wall } from "../../../../src/core/pieces";
import { Piece } from "../../../../src/models";
import { PieceEnum } from "../../../../src/enums";

describe("EnemyHero tests:", () => {
  let piece: Piece;

  beforeEach(() => {
    piece = new Wall();
  });

  it("When getType is called, then type is ☼", () => {
    const type = piece.getType();

    expect(type).toEqual(PieceEnum.WALL);
  });

  it("When getIsStatic is called, then isStatic is true", () => {
    const isStatic = piece.getIsStatic();

    expect(isStatic).toEqual(true);
  });
});
