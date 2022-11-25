import { PieceEnum } from "../../../../src/enums";
import { Perk } from "../../../../src/core/pieces";
import { IPerk } from "../../../../src/core/pieces/perk/models";
import { DEFAULT_PERK_TIMEOUT } from "../../../../src/core/pieces/perk/constants";

describe("Perk tests:", () => {
  let piece: IPerk;

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

  it("When getTimeout is called, then timeout is 30", () => {
    const timeout = piece.getTimeout();

    expect(timeout).toEqual(DEFAULT_PERK_TIMEOUT);
  });

  it("When decreaseTimeout is called 2 times and getTimeout is called, then timeout is 28", () => {
    const times = 2;
    for (let i = 0; i < times; i++) piece.decreaseTimeout();
    const timeout = piece.getTimeout();

    expect(timeout).toEqual(DEFAULT_PERK_TIMEOUT - times);
  });
});
