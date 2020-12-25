class TestObject
{
  constructor(name)
  {
    this.setName(name);
  }

  setName(name)
  {
    this.name = name;
  }

  getName()
  {
    return this.name;
  }

  sayName()
  {
    console.log(this.getName())
  }
}

export { TestObject };
