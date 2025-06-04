import { useState } from 'react';
import './UnityGame.css';

const UnityGame = () => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return <div className='game-container'>
        <iframe
            src="https://matthew1219mt.github.io/StudyWar/"
            className='game'
            title="StudyWar"
            width="1010"
            height="650"
            style={{visibility: isLoaded ? "visible" : "hidden"}}
            onLoad={()=>{setIsLoaded(true)}}
        />
        <div className='mobile'>You screen is too small, get a larger screen for the game : )</div>
    </div>
}

export default UnityGame;