var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Renderer_rows, _Renderer_cols, _Renderer_ctx;
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
        /**
         * The number of rows in the grid.
         */
        _Renderer_rows.set(this, void 0);
        /**
         * The number of columns in the grid.
         */
        _Renderer_cols.set(this, void 0);
        /**
         * The rendering context that the grid will be rendered to.
         */
        _Renderer_ctx.set(this, void 0);
        __classPrivateFieldSet(this, _Renderer_rows, cols, "f");
        __classPrivateFieldSet(this, _Renderer_cols, rows, "f");
        this.canvas = document.createElement('canvas');
        this.canvas.width = 400;
        this.canvas.height = 400;
        __classPrivateFieldSet(this, _Renderer_ctx, this.canvas.getContext('2d'), "f");
    }
    /**
     * Renders the grid to its canvas.
     * See {@link Drawer}.
     * @param drawer Contains the methods for rendering each cell of the grid.
     */
    draw(drawer) {
        drawer.setup.call(drawer, this, {
            ctx: __classPrivateFieldGet(this, _Renderer_ctx, "f"),
            x: 0,
            y: 0,
            cols: __classPrivateFieldGet(this, _Renderer_cols, "f"),
            rows: __classPrivateFieldGet(this, _Renderer_rows, "f")
        });
        for (let y = 0; y < __classPrivateFieldGet(this, _Renderer_cols, "f"); y++) {
            for (let x = 0; x < __classPrivateFieldGet(this, _Renderer_rows, "f"); x++) {
                __classPrivateFieldGet(this, _Renderer_ctx, "f").save();
                __classPrivateFieldGet(this, _Renderer_ctx, "f").scale(this.canvas.width / __classPrivateFieldGet(this, _Renderer_cols, "f"), this.canvas.height / __classPrivateFieldGet(this, _Renderer_rows, "f"));
                __classPrivateFieldGet(this, _Renderer_ctx, "f").translate(x, y);
                drawer.draw.call(drawer, this, {
                    ctx: __classPrivateFieldGet(this, _Renderer_ctx, "f"),
                    x: x,
                    y: y,
                    cols: __classPrivateFieldGet(this, _Renderer_cols, "f"),
                    rows: __classPrivateFieldGet(this, _Renderer_rows, "f")
                });
                __classPrivateFieldGet(this, _Renderer_ctx, "f").restore();
            }
        }
    }
    /**
     * Utility method fills the entire canvas with a specified color.
     * @param color The CSS color representation of the desired color.
     */
    fill(color) {
        __classPrivateFieldGet(this, _Renderer_ctx, "f").save();
        __classPrivateFieldGet(this, _Renderer_ctx, "f").fillStyle = color;
        __classPrivateFieldGet(this, _Renderer_ctx, "f").fillRect(0, 0, __classPrivateFieldGet(this, _Renderer_cols, "f"), __classPrivateFieldGet(this, _Renderer_rows, "f"));
        __classPrivateFieldGet(this, _Renderer_ctx, "f").restore();
    }
}
_Renderer_rows = new WeakMap(), _Renderer_cols = new WeakMap(), _Renderer_ctx = new WeakMap();
export { Renderer };
