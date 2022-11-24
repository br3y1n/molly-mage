import { Piece } from "../../../../src/models";
import { PieceEnum } from "../../../../src/enums";
import { RemotePotion } from "../../../../src/core/pieces";

describe("RemotePotion tests:", () => {
  let piece: Piece;

  beforeEach(() => {
    piece = new RemotePotion();
  });

  it("When getType is called, then type is 5", () => {
    const type = piece.getType();

    expect(type).toEqual(PieceEnum.POTION_TIMER_5);
  });

  it("When getIsStatic is called, then isStatic is true", () => {
    const isStatic = piece.getIsStatic();

    expect(isStatic).toEqual(true);
  });
});
