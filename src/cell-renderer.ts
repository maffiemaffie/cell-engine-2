class CellRenderer {
    #rows:number;
    #cols:number;
    #canvas:HTMLCanvasElement;
    #ctx:CanvasRenderingContext2D;

    constructor(cols:number, rows:number = cols) {
        this.#rows = cols;
        this.#cols = rows;

        this.#canvas = document.createElement('canvas');
        this.#ctx = this.#canvas.getContext('2d')!;
    }

    draw(drawer:Drawer) {
        drawer.setup.call

        for (let y = 0; y < this.#cols; y++) {
        for (let x = 0; x < this.#rows; x++) {
            this.#ctx.save();
            this.#ctx.translate(x, y);
            this.#ctx.scale(this.#canvas.width / this.#cols, this.#canvas.height / this.#rows);

            drawer.draw.call(drawer, {
                ctx: this.#ctx,
                x: x,
                y: y,
                cols: this.#cols,
                rows: this.#rows
            });
            this.#ctx.restore();
        }
        }
    }
}

interface DrawArgs {
    ctx:CanvasRenderingContext2D;
    readonly x:number;
    readonly y:number;
    readonly cols:number;
    readonly rows:number;
}

interface Drawer {
    setup:(ctx:CanvasRenderingContext2D)=>void;
    draw:(args:DrawArgs)=>void;
}

export { CellRenderer, DrawArgs, Drawer };