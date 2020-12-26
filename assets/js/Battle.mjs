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
    console.log(`${this.getA().getName()} vs. ${this.getB().getName()}`);
  }

  setA(a) { this.creature_a = a; }

  getA() { return this.creature_a; }

  setB(b) { this.creature_b = b; }

  getB() { return this.creature_b; }
}

export { Battle };
