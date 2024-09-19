import { useState } from "react";
import Card from "./card";
import {uuidv7} from "uuidv7"


export default function Cards({score, setScore, bestScore, setBestScore}){
    const [arrayOfScientists, changeArray] = useState(makeArrayOfScientists(scientists))
    function shuffle(){
        changeArray(shuffleArray(arrayOfScientists))
    }
    function reset(){
        setScore(0)
        changeArray(shuffleArray(arrayOfScientists.map(scientist=>{
            return {...scientist, isClicked:false}
        })))
    }
    function clicked(name){
        const copy = [...arrayOfScientists]
        copy.map(scientist=>{
            if(scientist.name==name) scientist.isClicked=true
            return scientist
        })
        changeArray(copy)
    }
    function makeCards(array){
        return array.map(scientist=>{
            return(<>
            <Card name={scientist.name} key={scientist.id} isClicked={scientist.isClicked} clicked={clicked} shuffle={shuffle} reset={reset} score={score} bestScore={bestScore} setBestScore={setBestScore} setScore={setScore}></Card>
            </>
            )
        })
    }
    return(<div className="cards">{makeCards(arrayOfScientists)}</div>)
}


function makeArrayOfScientists(scientists){
    return scientists.map(scientist=>{
        return {id: uuidv7(), name:scientist, isClicked:false}
    }) 
}


function shuffleArray(array) {
    // Create a copy of the array to avoid mutating the original
    const arr = [...array];
    
    for (let i = arr.length - 1; i > 0; i--) {
      // Generate a random index
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at i and j
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr;
  }
  
  const scientists = [
    "Albert Einstein",
    "Isaac Newton",
    "Marie Curie",
    "Charles Darwin",
    "Galileo Galilei",
    "Nikola Tesla",
    "Stephen Hawking",
    "Richard Feynman",
    "Ada Lovelace",
    "James Clerk Maxwell",
    "Gregor Mendel",
    "Niels Bohr"
  ];