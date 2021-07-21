
export default class Spell {
  constructor({ id, name, description, range, level, duration, components, desc, index }) {
    this.id = id;
    this.index = index;
    this.name = name;
    this.description = description || desc.join('\n\n');
    this.range = range;
    this.level = level;
    this.duration = duration;
    this.components = components;
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
              <button type="button" class="btn btn-success">Add Spell</button>
          </div>
      </div>
    `
  }
}

