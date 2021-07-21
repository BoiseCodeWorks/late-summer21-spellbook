import DndApiSpellsController from "./Controllers/DndApiSpellsController.js";


class App {
  dndApiSpellsController = new DndApiSpellsController()
}

window["app"] = new App();
