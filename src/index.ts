import * as CellRenderer from "./cell-renderer";

(() => {
    const container:HTMLElement = document.querySelector('#renderer-demo')!;
    const renderer:CellRenderer.Renderer = new CellRenderer.Renderer(20);
    container.appendChild(renderer.canvas);

    const maffie:CellRenderer.Drawer = {
        setup: function (sender: CellRenderer.Renderer, _args: CellRenderer.DrawArgs): void {
            sender.fill('black');
        },
        draw: function (_sender: CellRenderer.Renderer, args: CellRenderer.DrawArgs): void {
            const {ctx, x, y} = args;
            ctx.save();
            ctx.fillStyle = ((x^y)&1) ? 'black' : 'white';
            ctx.fillRect(0, 0, 1, 1);
            ctx.restore();
        }
    }
    renderer.draw(maffie);
})();