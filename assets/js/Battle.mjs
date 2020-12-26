class Battle
{
  constructor(a, b)
  {
    this.setA(a);
    this.setB(b);
  }

  begin()
  {
    console.log("A battle begins...");
    console.log(this.getA().getName(), " --- VS --- ", this.getB().getName());
    console.log("Health:",this.getA().getHealth(), "vs", this.getB().getHealth());
    console.log("Speed:",this.getA().getSpeed(), "vs", this.getB().getSpeed());
  }

  setA(a) { this.creature_a = a; }

  getA() { return this.creature_a; }

  setB(b) { this.creature_b = b; }

  getB() { return this.creature_b; }
}

export { Battle };
