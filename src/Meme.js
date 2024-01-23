import React from "react";

export default function Meme() {
  // const [memesData, setMemesData] = React.useState([]);   #API
  

  const [meme, setMeme] = React.useState({
    topText:"", 
    bottomText:"", 
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(()=>{
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