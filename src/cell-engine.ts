import { CellRenderer, DrawArgs, Drawer } from './cell-renderer';

export class CellEngine {
    resolution:number;
    renderer:CellRenderer;

    constructor(resolution:number = 50) {
        this.resolution = resolution;
        this.renderer = new CellRenderer(resolution);
    }

    draw() {
        this.renderer.draw(TestDrawer);
    }
}

const TestDrawer: Drawer = {
    setup: function ({ctx}:DrawArgs): void {
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
    },
    draw: function ({ctx, x, y, cols, rows}:DrawArgs): void {
        ctx.save();
        ctx.fillStyle = `rgb(${x / cols * 255}, ${y / rows * 255}, 255)`;
        ctx.fillRect(0, 0, 1, 1);
        ctx.restore();
    }
}