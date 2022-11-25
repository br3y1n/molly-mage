import { PieceEnum } from "../../../../src/enums";
import { Hero, RemotePotion } from "../../../../src/core/pieces";
import { IRemotePotion } from "../../../../src/core/pieces/remotePotion/models";

describe("RemotePotion tests:", () => {
  let piece: IRemotePotion;

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

  it("When getRadius is called, then radius is 3", () => {
    piece.update!();
    const radius = piece.getRadius();

    expect(radius).toEqual(3);
  });

  it("When getRadius is called and owner has perk radius, then radius is 5", () => {
    const hero = new Hero(PieceEnum.HERO);
    hero.addPerk(PieceEnum.POTION_BLAST_RADIUS_INCREASE);

    piece = new RemotePotion(hero);
    piece.update!();
    const radius = piece.getRadius();

    expect(radius).toEqual(5);
  });

  it("When getRadius is called and owner isDead, then radius is 3", () => {
    const hero = new Hero(PieceEnum.HERO_DEAD);
    hero.addPerk(PieceEnum.POTION_BLAST_RADIUS_INCREASE);

    piece = new RemotePotion(hero);
    piece.update!();
    const radius = piece.getRadius();

    expect(radius).toEqual(3);
  });
});
