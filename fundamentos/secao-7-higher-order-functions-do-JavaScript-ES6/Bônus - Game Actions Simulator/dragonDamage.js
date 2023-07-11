const dragon = require('./data/data');

const dragonDamage = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);

  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;

  return dragonDmg;
};
const damage = dragonDamage(dragon);
console.log('Dano do dragão:', damage);
