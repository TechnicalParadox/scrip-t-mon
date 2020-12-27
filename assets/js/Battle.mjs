class Battle
{
  constructor(a, b)
  {
    this.setA(a);
    this.setB(b);
    this.fighting = false;
    this.asTurn = this.getFirstTurn();
  }

  begin()
  {
    console.log("A battle begins...");
    console.log(this.getA().getName(), " --- VS --- ", this.getB().getName());
    console.log("Health:",this.getA().getHealth(), "vs", this.getB().getHealth());
    console.log("Speed:",this.getA().getSpeed(), "vs", this.getB().getSpeed());
    this.fighting = true;
  }

  getFirstTurn() { return (this.getSpeedA() >= this.getSpeedB()); }

  setA(a) { this.creature_a = a; }

  getA() { return this.creature_a; }

  setB(b) { this.creature_b = b; }

  getB() { return this.creature_b; }

  getNameA() { return this.getA().getName(); }

  getNameB() { return this.getB().getName(); }

  getHealthA() { return this.getA().getHealth(); }

  getHealthB() { return this.getB().getHealth(); }

  isFighting() { return this.fighting; }

  getTurn() { return this}

  status()
  {
    console.log(this.getNameA() + ":", this.getHealthA() +"HP");
    console.log(this.getNameB() + ":", this.getHealthB() +"HP");
    console.log("It is " + this.getTurn() + "'s turn...");
  }

  nextMove()
  {
    
  }
}

export { Battle };
