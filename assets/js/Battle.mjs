class Battle
{
  constructor(a, b)
  {
    this.setA(a);
    this.setB(b);
    this.fighting = false;
    this.asTurn = this.getFirstTurn();
    this.moveHandler = function(move)
    {
      switch (move)
      {
        case 'defend':
          // TODO: defend
          break;
        case 'flee':
          // TODO: flee
          break;
        default:
          // TODO: handle attack passed to move

      }

      this.fight(); // Should make this.isFighting false before calling if Battle is over
    };
  }

  begin()
  {
    console.log("A battle begins...");
    console.log(this.getA().getName(), " --- VS --- ", this.getB().getName());
    console.log("Health:",this.getA().getHealth(), "vs", this.getB().getHealth());
    console.log("Speed:",this.getA().getSpeed(), "vs", this.getB().getSpeed());
    this.fighting = true;
    this.fight();
  }

  getFirstTurn() { return (this.getSpeedA() >= this.getSpeedB()); }

  setA(a) { this.creature_a = a; }

  getA() { return this.creature_a; }

  setB(b) { this.creature_b = b; }

  getB() { return this.creature_b; }

  getNameA() { return this.getA().getName(); }

  getNameB() { return this.getB().getName(); }

  getSpeedA() { return this.getA().getSpeed(); }

  getSpeedB() { return this.getB().getSpeed(); }

  getHealthA() { return this.getA().getHealth(); }

  getHealthB() { return this.getB().getHealth(); }

  isFighting() { return this.fighting; }

  getTurnName() { return this.asTurn ? this.getNameA() : this.getNameB(); }

  isAsTurn() { return this.asTurn; }

  endTurn() { this.asTurn = !this.isAsTurn(); this.fight(); }

  getStatus()
  {
    console.log(this.getNameA() + ":", this.getHealthA() +"HP");
    console.log(this.getNameB() + ":", this.getHealthB() +"HP");
    console.log("It is " + this.getTurnName() + "'s turn...");
  }

  fight()
  {
    if (this.isFighting())
    {
      this.getStatus();
      this.nextMove();
    }
    else { this.endFight(); }
  }

  nextMove()
  {
    if (this.isAsTurn())
    {
      this.getA().getMove(this);
    }
    else
    {
      this.getB().getMove(this);
    }
  }
}

export { Battle };
