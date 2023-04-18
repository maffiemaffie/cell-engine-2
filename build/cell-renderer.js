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
var _CellRenderer_rows, _CellRenderer_cols, _CellRenderer_ctx;
class CellRenderer {
    constructor(cols, rows = cols) {
        _CellRenderer_rows.set(this, void 0);
        _CellRenderer_cols.set(this, void 0);
        _CellRenderer_ctx.set(this, void 0);
        __classPrivateFieldSet(this, _CellRenderer_rows, cols, "f");
        __classPrivateFieldSet(this, _CellRenderer_cols, rows, "f");
        this.canvas = document.createElement('canvas');
        __classPrivateFieldSet(this, _CellRenderer_ctx, this.canvas.getContext('2d'), "f");
    }
    draw(drawer) {
        drawer.setup.call(drawer, {
            ctx: __classPrivateFieldGet(this, _CellRenderer_ctx, "f"),
            x: 0,
            y: 0,
            cols: __classPrivateFieldGet(this, _CellRenderer_cols, "f"),
            rows: __classPrivateFieldGet(this, _CellRenderer_rows, "f")
        });
        for (let y = 0; y < __classPrivateFieldGet(this, _CellRenderer_cols, "f"); y++) {
            for (let x = 0; x < __classPrivateFieldGet(this, _CellRenderer_rows, "f"); x++) {
                __classPrivateFieldGet(this, _CellRenderer_ctx, "f").save();
                __classPrivateFieldGet(this, _CellRenderer_ctx, "f").translate(x, y);
                __classPrivateFieldGet(this, _CellRenderer_ctx, "f").scale(this.canvas.width / __classPrivateFieldGet(this, _CellRenderer_cols, "f"), this.canvas.height / __classPrivateFieldGet(this, _CellRenderer_rows, "f"));
                drawer.draw.call(drawer, {
                    ctx: __classPrivateFieldGet(this, _CellRenderer_ctx, "f"),
                    x: x,
                    y: y,
                    cols: __classPrivateFieldGet(this, _CellRenderer_cols, "f"),
                    rows: __classPrivateFieldGet(this, _CellRenderer_rows, "f")
                });
                __classPrivateFieldGet(this, _CellRenderer_ctx, "f").restore();
            }
        }
    }
}
_CellRenderer_rows = new WeakMap(), _CellRenderer_cols = new WeakMap(), _CellRenderer_ctx = new WeakMap();
export { CellRenderer };
