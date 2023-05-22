// interface PokemonInfo {
//   name: string;
//   number: number;
// }

// function displayPokemonInfo(pokemon: PokemonInfo): string {
//   return `Name: ${pokemon.name}, Number: ${pokemon.number}`;
// }

// const myPokemon: PokemonInfo = {
//   name: "Ectoplasma",
//   number: 094,
// };

// console.log(displayPokemonInfo(myPokemon));

class Pokemon {
  private _name: string;
  private _number: number;

  constructor(name: string, number: number) {
    this._name = name;
    this._number = number;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.length >= 1 && name.length <= 50) {
      this._name = name;
    } else {
      throw new Error("Name must be between 1 and 50 characters long.");
    }
  }

  get number(): number {
    return this._number;
  }

  set number(number: number) {
    if (number >= 1 && number <= 151) {
      this._number = number;
    } else {
      throw new Error("Number must be between 1 and 151.");
    }
  }

  toString(): string {
    return `Name: ${this._name}, Number: ${this._number}`;
  }
}

const myPokemon = new Pokemon("Pikachu", 25);
console.log(myPokemon.toString());
