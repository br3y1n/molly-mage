import { HeroPerk, HeroPiece, HeroPotion, IHero } from "./models";
import { DEAD_HEROES, DEFAULT_HERO_POTIONS } from "./constants";
import { PieceEnum } from "../../../enums";
import { PerkPiece } from "../perk/models";
import { DEFAULT_PERKS_FEATURES } from "../perk/constants";

class Hero implements IHero {
  private readonly isStatic: boolean = false;
  private readonly type: HeroPiece;
  private isDead: boolean;
  private perks: HeroPerk[] = [];
  private isInmune: boolean = false;
  private isThrower: boolean = false;
  private isExploder: boolean = false;
  private potions: HeroPotion = structuredClone(DEFAULT_HERO_POTIONS);

  constructor(type: HeroPiece) {
    this.type = type;
    this.isDead = DEAD_HEROES.includes(type);
  }

  public getIsStatic = () => this.isStatic;
  public getType = () => this.type;
  public getIsExploder = () => this.isExploder;
  public getPotions = () => this.potions;
  public getIsThrower = () => this.isThrower;
  public getIsInmune = () => this.isInmune;

  public getIsDead = () => this.isDead;
  public setIsDead = (isDead: boolean) => {
    this.isDead = isDead;
  };

  public getPerks = () => this.perks;
  public addPerk = (perkPiece: PerkPiece) => {
    const perk = structuredClone(DEFAULT_PERKS_FEATURES[perkPiece]);
    this.perks.push(perk);
    this._updatePerks();
  };

  public decreasePotion = () => {
    if (this.potions.remote > 0) {
      this._decreasedPerksBy(PieceEnum.POTION_REMOTE_CONTROL);

      return;
    }

    if (this.potions.normal.added > 0) {
      this._decreasedPerksBy(PieceEnum.POTION_COUNT_INCREASE);

      return;
    }

    this.potions.normal.value = 0;
    this.potions.normal.total = 0;
    this.potions.timeout = 5;
  };

  public update = () => {
    this._updatePotionTimeout();
    this._updatePotion();
    this._updatePerksTimeout();
    this._updatePerks();
  };

  private _updatePotion = () => {
    this.potions.normal.value = this.potions.timeout > 0 ? 0 : 1;
  };

  private _updatePerks = () => {
    this.potions.normal.added = this._countPerkBy(
      PieceEnum.POTION_COUNT_INCREASE
    );

    this.potions.radius.added = this._countPerkBy(
      PieceEnum.POTION_BLAST_RADIUS_INCREASE
    );

    this.potions.remote = this._countPerkBy(PieceEnum.POTION_REMOTE_CONTROL);

    this.potions.normal.total =
      this.potions.normal.added + this.potions.normal.value;

    this.potions.radius.total =
      this.potions.radius.added + this.potions.radius.value;

    this.isInmune = this._hasPerk(PieceEnum.POTION_IMMUNE);
    this.isThrower = this._hasPerk(PieceEnum.POISON_THROWER);
    this.isExploder = this._hasPerk(PieceEnum.POTION_EXPLODER);
  };

  private _hasPerk = (filteredType: PerkPiece): boolean =>
    this.perks.filter(({ type }) => type === filteredType).length > 0;

  private _countPerkBy = (filteredType: PerkPiece): number =>
    this.perks
      .filter(({ type }) => type === filteredType)
      .reduce(
        (prevCount, { count: currentCount }) => prevCount + currentCount!,
        0
      );

  private _decreasedPerksBy = (perkType: PerkPiece): void => {
    let hasDecrease = false;
    this.perks = this.perks
      .map((perk) => {
        const count = perk.count;
        const withoutCount = count === undefined;
        const isTypeDiff = perk.type !== perkType;

        if (withoutCount || isTypeDiff || hasDecrease) return perk;

        hasDecrease = true;

        return { ...perk, count: count - 1 };
      })
      .filter(({ count }) => (count ?? 1) > 0);

    this._updatePerks();
  };

  private _updatePerksTimeout = () => {
    this.perks = this.perks
      .map((perk) => {
        if (perk.timeout === undefined) return perk;

        return { ...perk, timeout: perk.timeout - 1 };
      })
      .filter(({ timeout }) => (timeout ?? 1) > 0);
  };

  private _updatePotionTimeout = () => {
    const currentValue = this.potions.timeout;
    this.potions.timeout = currentValue > 0 ? currentValue - 1 : currentValue;
  };
}

export { Hero };
