const warrior = require('./data/data');

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));

  const warriorDamage = maxDmg > minDmg ? maxDmg : minDmg;

  return warriorDamage;
};
const danoTotal = warriorAttack(warrior);
console.log('Dano Total:', danoTotal);