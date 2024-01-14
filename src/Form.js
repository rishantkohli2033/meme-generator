import React from "react";
import memeData from "./memesData.js";


export default function Form() {
  const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");
  function getMemeImage(){
    const memesArr = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    // console.log(memesArr[randomNumber].url);
    setMemeImage(memesArr[randomNumber].url);
  }

    return (
      <main className="form">
        <form action="./">
            <input className="form-input" type="text" name="Ftext" placeholder="Top text"/>
            <input className="form-input" type="text" name="Ltext" placeholder="Bottom text"/>
            
        </form>
        <div className="form-button-div">
                <button onClick={getMemeImage} className="form-button" type="submit">Get a new meme image</button>
        </div>
        <div className="imgContainer">
        <img src={memeImage} className="memeImage" alt="meme" />
        </div>
        
      </main>
    );
  }