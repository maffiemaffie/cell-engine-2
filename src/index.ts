import { CellEngine } from "./cell-engine";

(() => {
    const container:HTMLElement = document.querySelector('#engine-demo')!;
    const engine:CellEngine = new CellEngine(20);
    container.appendChild(engine.renderer.canvas);
    engine.draw();
})();