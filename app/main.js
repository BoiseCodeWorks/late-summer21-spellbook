import DndApiSpellsController from "./Controllers/DndApiSpellsController.js";
import MySpellsController from "./Controllers/MySpellsController.js";

class App {
  dndApiSpellsController = new DndApiSpellsController()
  mySpellsController = new MySpellsController()
}

window["app"] = new App();
