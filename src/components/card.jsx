import { useState, useEffect } from "react";

export default function Card({name, isClicked, clicked, shuffle, reset, score, setScore, bestScore, setBestScore}){
    const [url, changeUrl] = useState('')
    function onClick(){
        if(isClicked){
            reset()
        }else{
            clicked(name)
            if(score==11){
                reset()
                setBestScore(12)
            }else{
                setScore(s=>s+1)
                if(score==bestScore) setBestScore(score + 1)
                shuffle()
            }
        }
    }
    useEffect(()=>{
        getImageUrl(name).then(u=>changeUrl(u)).catch(e=>console.log(e))
        return ()=>{changeUrl('')}
    },[])

    return(<div className="card" onClick={onClick}>
        <img src={url} className='pic'></img>
        <h1 className="pic-name">{toTitleCase(name)}</h1>
    </div>
    )
}


async function getImageUrl(name) {
    const adjustedName = name.replace(/\s/g, "+");  // Replacing spaces with +
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
  
    try {
      const response = await fetch(`${corsProxy}https://serpapi.com/search.json?engine=google_images&q=${adjustedName}&api_key=a2c909355e80dc0883980fa4bf3219dbde29d42d32622edd30f086e6cdf237cb`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const search = await response.json();  // Parsing the JSON from response
      const url = search['images_results'][0].original;
  
      // Further processing or return data
      return url;
      
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

