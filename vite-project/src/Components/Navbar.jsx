import React from "react";

export default function Navbar() {
    return (
        <div className="flex justify-between bg-purple-800 text-center p-6">
            <div className="flex space-x-3">
            <img src="./images/meme.jpeg" className="w-10"></img>
            <h3 className="font-bold text-white text-2xl">Meme Generator</h3>

            </div>
            <div>
                <h3 className="text-white">React course - Project3</h3>
            </div>
            
        </div>

    )
}