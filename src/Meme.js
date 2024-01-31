import React from "react";

import Paper from 'paper';
import draw1 from './draw1';
import { prettyFormat } from "@testing-library/react";
import Draggable from "react-draggable";

export default function Meme(props) {
  // const [memesData, setMemesData] = React.useState([]);   #API
  const canvasRef = React.useRef(null)
 //const [canvasRef, setCanvasRef] = React.useState({})

  const [meme, setMeme] = React.useState({
    topText:"", 
    bottomText:"", 
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });
  
  const [allMemes, setAllMemes] = React.useState([]);
  //const[raster, setRaster] = React.useState("https://i.imgflip.com/30b1gx.jpg")

  React.useEffect(()=>{
    
    // const canvas = canvasRef.current;
    // Paper.setup(canvas);
    // Paper.project.clear();
    // var raster = new Paper.Raster("memeImage");
    // raster.size = Paper.view.viewSize;
    // raster.position = Paper.view.center;
    // raster.scale(0.2);
   
    fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))

    
  },[])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const memeImage = allMemes[randomNumber].url;
    
    
    setMeme(prevState => {
        return {
            ...prevState,
            randomImage: memeImage   
        }
    
    
    });
    
    
  }

  function handleText(event){
    setMeme(prevState =>{
      return({
        ...prevState,
        [event.target.name]: event.target.value,
      })
    })
  }





  
//       // create item
// var item = new Paper.PointText({
//   content: meme.topText,
//   point: Paper.view.center,
//   justification: 'center',
//   fontSize: 30,
//   selected: true
// });

// // init variables so they can be shared by event handlers
// var resizeVector;
// var moving;

// // on mouse down...
// function onMouseDown(event) {
//   // ...do a hit test on item bounds with a small tolerance for better UX
//   var cornerHit = item.hitTest(event.point, {
//       bounds: true,
//       tolerance: 5
//   });
//   // if a hit is detected on one of the corners...
//   if (cornerHit && ['top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(cornerHit.name) >= 0) {
//       // ...store current vector from item center to point
//       resizeVector = event.point - item.bounds.center;
//   // ...else if hit is detected inside item...
//   } else if (item.hitTest(event.point, { fill: true })) {
//       // ...store moving state
//       moving = true;
//   }
// }

// // on mouse drag...
// function onMouseDrag(event) {
//   // ...if a corner was previously hit...
//   if (resizeVector) {
//       // ...calculate new vector from item center to point
//       var newVector = event.point - item.bounds.center;
//       // scale item so current mouse position is corner position
//       item.scale(newVector / resizeVector);
//       // store vector for next event
//       resizeVector = newVector;
//   // ...if item fill was previously hit...
//   } else {
//       // ...move item
//       item.position += event.delta;
//   }
// }

// // on mouse up...
// function onMouseUp(event) {
//   // ... reset state
//   resizeVector = null;
//   moving = null;
// }

// // draw instructions
// new Paper.PointText({
//   content: 'Drag rectangle to move, drag corners to resize.',
//   point: Paper.view.center + [0, -50],
//   justification: 'center'
// });



function test(e)  {
  //var raster = new Paper.Raster('memeImage');
  console.log("raster")
  
  
  // var raster = new Paper.Raster(e.target.id);
  // raster.position = Paper.view.center;
  // raster.scale(1);
}
//var raster = new Paper.Raster("memeImage");
//   var raster = new Paper.Raster({
//     source: meme.randomImage,
//     position: Paper.view.center
// });



    return (
      <main className="form">
        <form action="./">
            <input className="form-input" type="text" name="topText" placeholder="Top text" onChange={handleText} value={meme.topText}/>
            <input className="form-input" type="text" name="bottomText" placeholder="Bottom text" onChange={handleText} value={meme.bottomText}/>
            
        </form>
        
        <div className="form-button-div">
                <button onClick={getMemeImage} className="form-button" type="submit">Get a new meme image</button>
        </div>
        <div className="meme">
                <img id="memeImage" src={meme.randomImage} className="meme--image" 
                alt="meme" />
                {/* <canvas ref={canvasRef} {...props} id="canvas" resize="true" onClick={test}/> */}
                <Draggable>
                <div >
                    <h2 className="meme--text top">{meme.topText}</h2>
                </div>
                </Draggable>
                <Draggable>
                <div >
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
                </Draggable>
                
        </div>
        
      </main>
    );
  }