/**
 * Class contains properties and methods for rendering a grid of cells to a dynamically created canvas.
 */
class Renderer {
    /**
     * Initializes a new instance of the Renderer class with the specified dimensions.
     * @param cols The number of columns in the newly created grid.
     * @param rows The number of rows in the newly created grid.
     */
    constructor(cols, rows = cols) {
        this.rows = cols;
        this.cols = rows;
        this.canvas = document.createElement('canvas');
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.ctx = this.canvas.getContext('2d');
    }
    /**
     * Adjusts the size of the canvas to a specified width and height.
     * @param width The desired width of the canvas.
     * @param height The desired height of the canvas.
     */
    resizeCanvas(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }
    /**
     * Renders the grid to its canvas.
     * See {@link Drawer}.
     * @param drawer Contains the methods for rendering each cell of the grid.
     */
    draw(drawer) {
        drawer.setup.call(drawer, this, {
            ctx: this.ctx,
            x: 0,
            y: 0,
            cols: this.cols,
            rows: this.rows
        });
        for (let y = 0; y < this.cols; y++) {
            for (let x = 0; x < this.rows; x++) {
                this.ctx.save();
                this.ctx.scale(this.canvas.width / this.cols, this.canvas.height / this.rows);
                this.ctx.translate(x, y);
                drawer.draw.call(drawer, this, {
                    ctx: this.ctx,
                    x: x,
                    y: y,
                    cols: this.cols,
                    rows: this.rows
                });
                this.ctx.restore();
            }
        }
    }
    /**
     * Utility method fills the entire canvas with a specified color.
     * @param color The CSS color representation of the desired color.
     */
    fill(color) {
        this.ctx.save();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
    }
}
export { Renderer };
