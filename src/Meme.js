import React from "react";
import memesData from "./memesData.js";


export default function Form() {
  const [meme, setMeme] = React.useState({
    topText:"Hello", 
    bottomText:"World!!", 
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });

  const [allMemes, setAllMemes] = React.useState(memesData.data.memes);
  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const memeImage = memesArray[randomNumber].url;
    setMeme(prevState => {
        return {
            ...prevState,
            randomImage: memeImage   
        }
    });
    
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
        <img src={meme.randomImage} className="memeImage" alt="meme" />
        </div>
        
      </main>
    );
  }