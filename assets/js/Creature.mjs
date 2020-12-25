class Creature
{
  /**
   * Constructs a new Creature
   * @param {String} name      - The name of the creature
   * @param {Number} maxHealth - The maximum health of the creature
   * @param {Number} speed     - The speed value of the creature
   */
  constructor(name, maxHealth, speed)
  {
    this.name = name;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.speed = speed;
    this.attacks = [];
  }

  addAttack(name, damage, accuracy)
  {
    let attack = {};
    attack.name = name;
    attack.damage = damage;
    attack.accuracy = accuracy;
    this.attacks.push(attack);
    return attack;
  }

  attacked(attack)
  {
    // TODO: Account for accuracy/etc and this creatures stats and dynmically respond
  }


}

export { Creature };
