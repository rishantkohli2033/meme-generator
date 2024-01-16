export default function GetMeme(){
    const memeArr = fetch("https://api.imgflip.com/get_memes").then(f=>{
        console.log(memeArr);
    })
    return (
        <img src="images/troll-face.png" alt="img" />
    );
}