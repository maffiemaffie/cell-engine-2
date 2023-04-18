import { CellRenderer, Drawer } from './cell-renderer';

class CellEngine {
    resolution:number;
    renderer:CellRenderer;

    constructor(resolution:number = 50) {
        this.resolution = resolution;
        this.renderer = new CellRenderer(resolution);
    }

    draw() {

    }
}

class TestDrawer : Drawer { 
    constructor() {}


}