import { PieceEnum } from "../../../../src/enums";
import { Hero } from "../../../../src/core/pieces";
import { HeroPerk, IHero } from "../../../../src/core/pieces/hero/models";
import { DEFAULT_HERO_POTIONS } from "../../../../src/core/pieces/hero/constants";
import { DEFAULT_PERKS_FEATURES } from "../../../../src/core/pieces/perk/constants";
import { PerkPiece } from "../../../../src/core/pieces/perk/models";

describe("Hero tests:", () => {
  let piece: IHero;

  const addAllPerks = (piece: IHero) => {
    (Object.keys(DEFAULT_PERKS_FEATURES) as PerkPiece[]).forEach((perk) => {
      piece.addPerk(perk);
    });
  };

  const decreaseExpectedPerks = (piece: IHero, expectedPerks: HeroPerk[]) => {
    piece.update!();
    expectedPerks.forEach((perk) => {
      perk.timeout && perk.timeout--;
    });
  };

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

  it("When getIsExploder is called, then isExploder is false", () => {
    const isExploder = piece.getIsExploder();

    expect(isExploder).toEqual(false);
  });

  it("When getIsThrower is called, then isThrower is false", () => {
    const isThrower = piece.getIsThrower();

    expect(isThrower).toEqual(false);
  });

  it("When getIsInmune is called, then isStatic is false", () => {
    const isInmune = piece.getIsInmune();

    expect(isInmune).toEqual(false);
  });

  describe("isDead flow:", () => {
    it("When getIsDead is called, then isDead is false", () => {
      const isDead = piece.getIsDead();

      expect(isDead).toEqual(false);
    });

    it("When getIsDead is called and type is Ѡ, then isDead is true", () => {
      piece = new Hero(PieceEnum.HERO_DEAD);
      const isDead = piece.getIsDead();

      expect(isDead).toEqual(true);
    });

    it("When setIsDead is called with true, then isDead is true", () => {
      piece.setIsDead(true);
      const isDead = piece.getIsDead();

      expect(isDead).toEqual(true);
    });
  });

  describe("perks flow:", () => {
    const defaultExpectedPerks = [
      DEFAULT_PERKS_FEATURES[PieceEnum.POISON_THROWER],
      DEFAULT_PERKS_FEATURES[PieceEnum.POTION_COUNT_INCREASE],
      DEFAULT_PERKS_FEATURES[PieceEnum.POTION_BLAST_RADIUS_INCREASE],
      DEFAULT_PERKS_FEATURES[PieceEnum.POTION_EXPLODER],
      DEFAULT_PERKS_FEATURES[PieceEnum.POTION_IMMUNE],
      DEFAULT_PERKS_FEATURES[PieceEnum.POTION_REMOTE_CONTROL],
    ];

    it("When getPerks is called, then perks is empty array", () => {
      const perks = piece.getPerks();

      expect(perks).toEqual([]);
    });

    it("When addPerk is called with all features, then perks has all features", () => {
      const currentExpectedPerks = structuredClone(defaultExpectedPerks);
      addAllPerks(piece);
      decreaseExpectedPerks(piece, currentExpectedPerks);

      const perks = piece.getPerks();
      const potions = piece.getPotions();
      const isInmune = piece.getIsInmune();
      const isThrower = piece.getIsThrower();
      const isExploder = piece.getIsExploder();

      expect(isInmune).toEqual(true);
      expect(isThrower).toEqual(true);
      expect(isExploder).toEqual(true);
      expect(perks).toEqual(currentExpectedPerks);

      expect(potions).toEqual({
        normal: {
          added: 4,
          total: 5,
          value: 1,
        },
        radius: {
          added: 2,
          total: 5,
          value: 3,
        },
        remote: 3,
        timeout: 0,
      });
    });

    it("When update is called multiples times, then perks timeout decrease", () => {
      const times = 29;
      const currentExpectedPerks = structuredClone(defaultExpectedPerks);

      addAllPerks(piece);

      for (let i = 0; i < times; i++) {
        decreaseExpectedPerks(piece, currentExpectedPerks);

        const perks = piece.getPerks();

        expect(perks).toEqual(currentExpectedPerks);
      }
    });
  });

  describe("potions flow:", () => {
    it("When getPotions is called, then potions are default", () => {
      const potions = piece.getPotions();

      expect(potions).toEqual(DEFAULT_HERO_POTIONS);
    });

    it("When decreasePotion is called, then normal potions are 0", () => {
      piece.decreasePotion();
      const potions = piece.getPotions();

      expect(potions).toEqual({
        normal: {
          added: 0,
          total: 0,
          value: 0,
        },
        radius: {
          added: 0,
          total: 3,
          value: 3,
        },
        remote: 0,
        timeout: 5,
      });
    });

    it("When decreasePotion is called and then update is called, then potion.timeout decrease", () => {
      piece.decreasePotion();
      piece.update!();
      const potions = piece.getPotions();

      expect(potions).toEqual({
        normal: {
          added: 0,
          total: 0,
          value: 0,
        },
        radius: {
          added: 0,
          total: 3,
          value: 3,
        },
        remote: 0,
        timeout: 4,
      });
    });

    it("When decreasePotion is called multiple times and has perks, then decrease remote, normal.added and normal.value successively", () => {
      const potions = piece.getPotions();
      const expectedPotions = {
        normal: {
          added: 4,
          total: 5,
          value: 1,
        },
        radius: {
          added: 2,
          total: 5,
          value: 3,
        },
        remote: 3,
        timeout: 0,
      };
      const decreasePotionRemote = () => {
        expectedPotions.remote--;
      };

      const decreasePotionNormalAdded = () => {
        expectedPotions.normal.added--;
        expectedPotions.normal.total--;
      };

      const decreasePotionNormalValue = () => {
        expectedPotions.normal.value--;
        expectedPotions.normal.total--;
        expectedPotions.timeout = 4;
      };

      const decreaseExpected = (
        times: number,
        decreaseExpectedFn: () => void
      ) => {
        for (let i = 0; i < times; i++) {
          piece.decreasePotion();
          piece.update!();
          decreaseExpectedFn();

          expect(potions).toEqual(expectedPotions);
        }
      };

      addAllPerks(piece);
      decreaseExpected(3, decreasePotionRemote);
      decreaseExpected(4, decreasePotionNormalAdded);
      decreaseExpected(1, decreasePotionNormalValue);
    });
  });
});
