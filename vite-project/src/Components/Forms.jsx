import React from "react";
import memesData from "./MemesData";

export default function Form() {
  // const [memeImage, setImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");
  const [meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  }
    
  )


  function handleMeme(e) {
    e.preventDefault();

    const memesArray = memesData.data.memes;

    // console.log(memesArray);
    const randomMemes = Math.floor(Math.random() * memesArray.length);
    // console.log(randomMemes)

    const url = memesArray[randomMemes].url;
    // console.log(url);
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))
    
  }
  function handleChange(event) {
    const{name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name] :value
      }
    })

  }
  return (
    <div>
      <form className="grid grid-cols-2 grid-rows-2 gap-2 mt-6" onSubmit={handleMeme}>
        <input
          id="top-text"
          type="text"
          placeholder="top text"
          className="border w-64 p-2 rounded "
          onChange = {handleChange}
          name="topText"
          value={meme.topText}
        ></input>
        <input
          id="bottom-text"
          type="text"
          placeholder="bottom text"
          className="border w-64 p-2 rounded"
          onChange = {handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button
          className="bg-purple-800 row-span-2 p-3 text-center rounded-sm m-4 "
          
        >
          Get a new meme image
        </button>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
      </form>
      
    </div>
  );
}
