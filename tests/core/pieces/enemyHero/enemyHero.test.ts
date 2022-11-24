import { Piece } from "../../../../src/models";
import { PieceEnum } from "../../../../src/enums";
import { EnemyHero } from "../../../../src/core/pieces";

describe("EnemyHero tests:", () => {
  let piece: Piece;

  beforeEach(() => {
    piece = new EnemyHero(PieceEnum.OTHER_HERO);
  });

  it("When getType is called, then type is ♥", () => {
    const type = piece.getType();

    expect(type).toEqual(PieceEnum.OTHER_HERO);
  });

  it("When getIsStatic is called, then isStatic is false", () => {
    const isStatic = piece.getIsStatic();

    expect(isStatic).toEqual(false);
  });
});
