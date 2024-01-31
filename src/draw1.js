import Paper from "paper";

const draw1 = () => {
  let myPath = new Paper.Path();

  Paper.view.onMouseDown = (event) => {
    myPath.strokeColor = "black";
    myPath.strokeWidth = 3;
  };

  Paper.view.onMouseDrag = (event) => {
    myPath.add(event.point);
  };

  Paper.view.draw();
// var path = new Paper.Path();
// 	// Give the stroke a color
// 	path.strokeColor = 'black';
// 	var start = new Paper.Point(100, 100);
// 	// Move to start and draw a line from there
// 	path.moveTo(start);
// 	// Note the plus operator on Point objects.
// 	// PaperScript does that for us, and much more!
// 	path.lineTo(start + [ 100, -50 ]);
};

export default draw1;