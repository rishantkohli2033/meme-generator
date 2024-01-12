export default function Form() {
    return (
      <div className="form">
        <form action="./" method="post">
            <input className="form-input" type="text" name="Ftext" />
            <input className="form-input" type="text" name="Ltext"/>
            <div className="form-button-div">
                <button className="form-button" type="submit">Get a new meme image</button>
            </div>
            
        </form>
      </div>
    );
  }