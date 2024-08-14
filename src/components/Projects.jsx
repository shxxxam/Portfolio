import React from 'react';

import spotifyQuick from "/spotifyQuick.jpeg";
import MemoryGame from "/MemoryGame.jpeg";
import DogoJunction from "/DogoJunction.jpeg";
import TodoScript from "/TodoScript.jpeg";
import unFiltered from "/unFiltered.jpeg";
import NetflixClone from "/NetflixClone.jpeg";

function Projects() {
    const cardItems = [
        {
            id: 1,
            logo: spotifyQuick,
            name: "SpotifyQuick",
            desc: "Seamless music playback, no login needed.",
            demoLink: "http://spotifyquick.freewebhostmost.com/",
            sourceLink: "https://github.com/shxxxam/SpotifyQuick"
        },
        {
            id: 2,
            logo: unFiltered,
            name: "Unfiltered",
            desc: "Bold, unapologetic news via News API integration.",
            demoLink: "https://shxxxam.github.io/Unfiltered/",
            sourceLink: "https://github.com/shxxxam/Unfiltered"
        },
        {
            id: 3,
            logo: DogoJunction,
            name: "DoggoJunction",
            desc: "A sleek marketplace for buying and selling dogs with Bootstrap.",
            demoLink: "https://shxxxam.github.io/DoggoJunction/",
            sourceLink: "https://github.com/shxxxam/DoggoJunction"
        },
        {
            id: 4,
            logo: MemoryGame,
            name: "MemoryGame",
            desc: "Test your memory by matching pairs of cards.",
            demoLink: "https://shxxxam.github.io/MemoryGame/",
            sourceLink: "https://github.com/shxxxam/MemoryGame"
        },
        {
            id: 5,
            logo: TodoScript,
            name: "TodoScript",
            desc: "A simple React to-do app for managing tasks efficiently.",
            demoLink: "https://todo-script.vercel.app/",
            sourceLink: "https://github.com/shxxxam/TodoScript"
        },
        {
            id: 6,
            logo: NetflixClone,
            name: "NetflixClone",
            desc: "A Netflix clone showcasing front-end and UI design skills.",
            demoLink: "https://shxxxam.github.io/NetflixClone/",
            sourceLink: "https://github.com/shxxxam/NetflixClone"
        },
    ];

    return (
        <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5">Projects</h1>
                <span className='font-medium'>Projects that I created or maintaining.</span>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {
                        cardItems.map(({ id, logo, name, desc, demoLink, sourceLink }) => (
                            <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src={logo} className='w-[115px] h-[115px] p-1 rounded-full border-[2px]' alt={name} />
                                <div>
                                    <div className="px-2 font-bold text-xl mb-2 mt-0.5">{name}</div>
                                    <p className="px-2 text-gray-700">
                                        {desc}
                                    </p>
                                </div>
                                <div className="px-2 py-4 space-x-3 justify-around">
                                    <a href={demoLink} target='_blank' rel="noopener noreferrer">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded">Demo</button>
                                    </a>
                                    <a href={sourceLink} target='_blank' rel="noopener noreferrer">
                                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-2 rounded">Source Code</button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;
