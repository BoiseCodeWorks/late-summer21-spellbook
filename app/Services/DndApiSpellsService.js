import { ProxyState } from "../AppState.js"
import Spell from "../Models/Spell.js"
import { dndApi } from "./AxiosService.js"

class DndApiSpellsService {
  async getAllSpells() {
    let res = await dndApi.get()
    // console.log(res.data.results)
    ProxyState.allDndApiSpells = res.data.results
  }

  async getSpell(id) {
    let res = await dndApi.get(id)
    console.log(res.data)
    ProxyState.activeSpell = new Spell(res.data)
  }
}

export const dndApiSpellsService = new DndApiSpellsService()