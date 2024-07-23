import React from "react";
import MemesData from "./MemesData";

export default function Form() {
    function handleMeme() {
        const memesArray = MemesData.data.memes
        const randomMemes = Math.floor(Math.random() * memesArray.length)
        // console.log(randomMemes)
        const url = memesArray[randomMemes].url
        console.log(url)

    }
  return (
    <div>
      <form className="grid grid-cols-2 grid-rows-2 gap-2 mt-6">
       <input id="top-text" type="text" placeholder="Top text" className="border w-64 p-2 rounded " ></input>
        <input id= "bottom-text"type="text" placeholder="Bottom text" className="border w-64 p-2 rounded"></input>
        <button className="bg-purple-800 row-span-2 p-3 text-center rounded-sm mt-4 "
        onClick={handleMeme}>Get a new meme image</button>
      </form>
    </div>
  );
}
