/**
 * Class contains properties and methods for rendering a grid of cells to a dynamically created canvas.
 */
declare class Renderer {
    /**
     * The number of rows in the grid.
     */
    private rows;
    /**
     * The number of columns in the grid.
     */
    private cols;
    /**
     * The canvas that the grid will be rendered on.
     */
    readonly canvas: HTMLCanvasElement;
    /**
     * The rendering context that the grid will be rendered to.
     */
    private ctx;
    /**
     * Initializes a new instance of the Renderer class with the specified dimensions.
     * @param cols The number of columns in the newly created grid.
     * @param rows The number of rows in the newly created grid.
     */
    constructor(cols: number, rows?: number);
    /**
     * Renders the grid to its canvas.
     * See {@link Drawer}.
     * @param drawer Contains the methods for rendering each cell of the grid.
     */
    draw(drawer: Drawer): void;
    /**
     * Utility method fills the entire canvas with a specified color.
     * @param color The CSS color representation of the desired color.
     */
    fill(color: string): void;
}
/**
 * Contains properties for cell rendering.
 */
interface DrawArgs {
    /**
     * The rendering context that the grid will be rendered to.
     */
    ctx: CanvasRenderingContext2D;
    /**
     * The column of the current cell.
     */
    readonly x: number;
    /**
     * The row of the curent cell.
     */
    readonly y: number;
    /**
     * The number of columns in the entire grid.
     */
    readonly cols: number;
    /**
     * The number of rows in the entire grid.
     */
    readonly rows: number;
}
/**
 * Contains methods for cell rendering.
 */
interface Drawer {
    /**
     * Method is called once on the entire canvas before any cells are rendered.
     * @param sender The {@link Renderer} that called this method.
     * @param args The {@link DrawArgs} containing helpful properties for rendering.
     */
    setup: (sender: Renderer, args: DrawArgs) => void;
    /**
     * Method is called locally for each cell in the grid.
     * @param sender The {@link Renderer} that called this method.
     * @param args The {@link DrawArgs} containing helpful properties for rendering.
     */
    draw: (sender: Renderer, args: DrawArgs) => void;
}
export { Renderer, DrawArgs, Drawer };
