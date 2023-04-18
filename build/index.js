import { CellEngine } from "./cell-engine.js";
(() => {
    const container = document.querySelector('#engine-demo');
    const engine = new CellEngine(20);
    container.appendChild(engine.renderer.canvas);
    engine.draw();
})();
