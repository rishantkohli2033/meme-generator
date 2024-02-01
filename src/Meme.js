import React from "react";

import Paper from 'paper';
import draw1 from './draw1';
import { prettyFormat } from "@testing-library/react";
import Draggable from "react-draggable";

export default function Meme(props) {
  
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



  


function pasteIntoInput(e, text) {
  console.log(e.target.name)
  let val = e.target.name;
  
  setMeme(prevState=>{
    return({
      ...prevState,
      [e.target.name]: [prevState.topText + " "],
    })
  })
  //  el.onFocus();
  
}

function handleEnter(evt) {
  //console.log(evt.target.name);
  if (evt.keyCode == 13) {
      if (evt.type == "keydown") {
        pasteIntoInput(evt, "\n");
      }
      evt.preventDefault();
  }
}





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
                <img id="memeImage" src={meme.randomImage} className="meme--image visuallyhidden" 
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