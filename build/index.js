import * as CellRenderer from "./cell-renderer.js";
(() => {
    const container = document.querySelector('#renderer-demo');
    const renderer = new CellRenderer.Renderer(20);
    container.appendChild(renderer.canvas);
    const maffie = {
        setup: function (sender, _args) {
            sender.fill('black');
        },
        draw: function (_sender, args) {
            const { ctx, x, y } = args;
            ctx.save();
            ctx.fillStyle = ((x ^ y) & 1) ? 'black' : 'white';
            ctx.fillRect(0, 0, 1, 1);
            ctx.restore();
        }
    };
    renderer.draw(maffie);
})();
