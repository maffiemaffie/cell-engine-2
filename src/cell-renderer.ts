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
            drawer.draw.call(drawer, {
                x: x,
                y: y,
                cols: this.#cols,
                rows: this.#rows
            });
        }
        }
    }
}

interface DrawArgs {
    x:number;
    y:number;
    cols:number;
    rows:number;
}

interface Drawer {
    setup:(ctx:CanvasRenderingContext2D)=>void;
    draw:(args:DrawArgs)=>void;
}