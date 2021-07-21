import { ProxyState } from "../AppState.js";
import Spell from "../Models/Spell.js";
import { sandbox } from "./AxiosService.js";

class MySpellsService {


  async getMySpells() {
    const res = await sandbox.get()
    console.log(res.data);
    ProxyState.mySpells = res.data.map(s => new Spell(s))
  }

  async addSpell() {
    const res = await sandbox.post('', ProxyState.activeSpell)
    console.log(res.data);
    const newSpell = new Spell(res.data)
    ProxyState.mySpells = [...ProxyState.mySpells, newSpell]
    ProxyState.activeSpell = newSpell
  }

  setSpell(id) {
    const spell = ProxyState.mySpells.find(s => s.id === id)
    if (!spell) {
      throw new Error("invalid spell id")
    }
    ProxyState.activeSpell = spell
    ProxyState.mySpells = ProxyState.mySpells
  }

  async removeSpell() {
    const res = await sandbox.delete(ProxyState.activeSpell.id)
    ProxyState.mySpells = ProxyState.mySpells.filter(s => s.id != ProxyState.activeSpell.id)
    ProxyState.activeSpell = null
  }

}
export const mySpellsService = new MySpellsService()