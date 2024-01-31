import React from "react";

// create item
var item = new PointText({
    content: 'Custom text content',
    point: view.center,
    justification: 'center',
    fontSize: 30,
    selected: true
});

// init variables so they can be shared by event handlers
var resizeVector;
var moving;

// on mouse down...
function onMouseDown(event) {
    // ...do a hit test on item bounds with a small tolerance for better UX
    var cornerHit = item.hitTest(event.point, {
        bounds: true,
        tolerance: 5
    });
    // if a hit is detected on one of the corners...
    if (cornerHit && ['top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(cornerHit.name) >= 0) {
        // ...store current vector from item center to point
        resizeVector = event.point - item.bounds.center;
    // ...else if hit is detected inside item...
    } else if (item.hitTest(event.point, { fill: true })) {
        // ...store moving state
        moving = true;
    }
}

// on mouse drag...
function onMouseDrag(event) {
    // ...if a corner was previously hit...
    if (resizeVector) {
        // ...calculate new vector from item center to point
        var newVector = event.point - item.bounds.center;
        // scale item so current mouse position is corner position
        item.scale(newVector / resizeVector);
        // store vector for next event
        resizeVector = newVector;
    // ...if item fill was previously hit...
    } else {
        // ...move item
        item.position += event.delta;
    }
}

// on mouse up...
function onMouseUp(event) {
    // ... reset state
    resizeVector = null;
    moving = null;
}

// draw instructions
new PointText({
    content: 'Drag rectangle to move, drag corners to resize.',
    point: view.center + [0, -50],
    justification: 'center'
});