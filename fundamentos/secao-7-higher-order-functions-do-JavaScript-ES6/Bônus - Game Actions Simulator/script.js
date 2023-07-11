const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon }

// PARTE I.1:

const dragonDamage = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);

  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;

  return dragonDmg;
};
const damage = dragonDamage(dragon);
console.log('Dano do dragão:', damage);

// // // PARTE I.2

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));

  const warriorDamage = maxDmg > minDmg ? maxDmg : minDmg;

  return warriorDamage;
};
console.log('Dano Total:', warriorAttack(warrior));

// // PARTE I.3

const mageDamageAndMana = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg *2;
  const turnInfo = {
    mana: 0,
    dano: 'Sem mana suficiente...',
  };
  if (mageMana > 15) {
    const mageDamage = minDmg < maxDmg ? maxDmg : minDmg;
    turnInfo.mana = 15;
    turnInfo.dano = mageDamage;
    return turnInfo;
  }
  return turnInfo;
};
const danoTotal = mageDamageAndMana(mage);
console.log('Dano total:', danoTotal);

// PARTE II.1:

const gameActions = {
  turnWarrior: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  turnMage: (mageAttack) => {
    const turnMageStats = mageAttack(mage);
    const mageDamage = turnMageStats.dano;
    mage.mana -= turnMageStats.manaSpent;
    dragon.healthPoints -= mage.damage;
    mage.damage = mageDamage;
  },
  turnDragon: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },

};
gameActions.turnDragon(dragonAttack);
gameActions.turnMage(mageAttack);
gameActions.turnWarrior(warriorAttack);
