import { ProxyState } from "../AppState.js";

export default class Spell {
  constructor({ id, name, description, range, level, duration, components, desc, index, forms }) {
    this.id = id;
    this.index = index;
    this.name = name;
    this.description = description || desc.join('\n\n');

    this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    this.range = range;
    this.level = level;
    this.duration = duration;
    this.components = components;

    this.isApiPokemon = forms != undefined
  }

  get Template() {
    return `
      <div class="bg-light m-3 p-3 shadow">
          <div>
              <h4 class='uppercase'>${this.name}</h4>
              <p>Level: ${this.level}</p>
              <p>Range: ${this.range}</p>
              <p>Components: [${this.components.join(", ")}]</p>
              <p>Duration: ${this.duration}</p>
              <p>Description: ${this.description}</p>
          </div>
          <div class="text-right">
             ${this.Button}
          </div>
      </div>
    `
  }
  get Button() {
    const exists = ProxyState.mySpells.find(s => s.name === ProxyState.activeSpell.name)
    if (this.index) {
      return `
          <button type="button" class="btn btn-success" ${exists ? 'disabled' : ''} onclick="app.mySpellsController.addSpell()">Add Spell</button>`
    }
    return `
      <button type="button" class="btn btn-danger" onclick="app.mySpellsController.removeSpell()">Remove Spell</button>
    `
  }
}

