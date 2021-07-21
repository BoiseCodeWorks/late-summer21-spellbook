import { ProxyState } from "../AppState.js"
import { mySpellsService } from "../Services/MySpellsService.js"

function _drawAll() {
  const spells = ProxyState.mySpells
  const activeSpell = ProxyState.activeSpell || {}
  let template = ""
  spells.forEach(s => template += `<li class="action ${activeSpell.id === s.id ? 'text-primary' : ''}" onclick="app.mySpellsController.setSpell('${s.id}')">${s.name}</li>`)
  if (!template) {
    template += '<p><em>NO SPELLS IN BOOK<em></p>'
  }
  document.getElementById("my-spells").innerHTML = template
}

export default class MySpellsController {
  constructor() {
    ProxyState.on('mySpells', _drawAll)
    this.getMySpells()
  }
  async getMySpells() {
    try {
      await mySpellsService.getMySpells()
    } catch (error) {
      console.error("failed to get sandbox spells")
    }
  }

  async addSpell() {
    try {
      await mySpellsService.addSpell()
    } catch (error) {
      console.error("something went wrong in adding that spell")
    }
  }

  setSpell(id) {
    try {
      mySpellsService.setSpell(id)
    } catch (error) {
      console.error('invalid id')
    }
  }

  async removeSpell() {
    try {
      await mySpellsService.removeSpell()
    } catch (error) {
      console.error('invalid id')
    }
  }

}