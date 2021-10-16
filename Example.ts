
class myClass{
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

class mySubClass extends myClass implements myInterface{
  get hired(): boolean {
    return this._hired;
  }

  set hired(value: boolean) {
    this._hired = value;
  }
  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }
  private _surname: string

  constructor(surname: string, firstName: string) {
    super(firstName);
    this._surname = surname
  }

  private _hired: boolean = true;

  fire(): void {
    this.hired = false;
  }
}

let o = new mySubClass("Harrington", "David")

o.fire()

console.log(`${o.name} ${o.surname} is ${o.hired}`);

interface myInterface{
  name: string;
  hired : boolean;
  fire() : void;
}


