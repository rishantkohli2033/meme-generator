import React from "react";
import memesData from "./memesData.js";


export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText:"", 
    bottomText:"", 
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

  function handleText(event){
    setMeme(prevState =>{
      return({
        ...prevState,
        [event.target.name]: event.target.value,
      })
    })
    console.log(meme);
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
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        
      </main>
    );
  }