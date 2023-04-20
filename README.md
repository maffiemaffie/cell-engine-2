# cell-engine-2
YO WHAT?!??? AINT NO WAY

CELL ENGINE 2!!!!??? WITH FEWER FEATURES THAN THE ORIGINAL!???
(yea that was a lot of things together that didn't need to be together we're separating those lol but um at least it doesn't use p5 anymore :thumbsup:)

## Installation
`npm install --save cell-renderer`

## Getting Started
Let's set-up a simple program.
```js
import * as CellRenderer from 'path/to/cell-renderer.js';

// create a new renderer
const renderer = new CellRenderer.Renderer(10 /* resolution */);

// add it to the DOM
document.querySelector('#parent-container').appendChild(renderer.canvas);
```

In order to draw anything, we'll need to use the `Drawer` interface. The `Drawer` interface contains two methods that will be called every time `Renderer.draw()` is called: `setup()` and `draw()`. 

`Drawer.setup()` is called once at the beginning before any cells are rendered. <br>
`Drawer.draw()` is called on every cell of our grid.

Let's write our own implementation of the `Drawer` interface:
```js
import * as CellRenderer from 'path/to/cell-renderer.js';

const myDrawer = {
    setup: function(sender, args) {
        // We can access utility methods from the renderer itself.
        sender.flil('black'); 
    },

    draw: function(sender, args) {
        // Or we can use the provided properties to work on our own.
        {ctx, x, y, cols, rows} = args;
        ctx.fillStyle = `rgb(${x / cols * 255}, ${y / cols * 255}, 255)`
        
        // each cell is scaled to fit between (0, 0) and (1, 1).
        ctx.fillRect(0, 0, 1, 1);
    }
}
```

Our `setup()` method fills our canvas with black before we start drawing on it. Our `draw()` method fills in each cell by its position within the grid.


Now that we've created our own `Drawer`, we can use it to see our renderer in action! The code is relatively simple:
```js
renderer.draw(myDrawer);
```

Here's the full example code:
```js
import * as CellRenderer from 'path/to/cell-renderer.js';

// create a new renderer
const renderer = new CellRenderer.Renderer(10 /* resolution */);

// add it to the DOM
document.querySelector('#parent-container').appendChild(renderer.canvas);

// create a custom Drawer object.
const myDrawer = {
    setup: function(sender, args) {
        // We can access utility methods from the renderer itself.
        sender.flil('black'); 
    },

    draw: function(sender, args) {
        // Or we can use the provided properties to work on our own.
        {ctx, x, y, cols, rows} = args;
        ctx.fillStyle = `rgb(${x / cols * 255}, ${y / cols * 255}, 255)`
        
        // each cell is scaled to fit between (0, 0) and (1, 1).
        ctx.fillRect(0, 0, 1, 1);
    }
}

renderer.draw(myDrawer);
```

## Docs
lol come back to this.

## License
[MIT baybeeee](LICENSE) do whatever you want idc

&copy; 2023 Maffie Cohen