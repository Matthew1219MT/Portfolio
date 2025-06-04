import { useState } from 'react';
import './UnityGame.css';
// import { Unity, useUnityContext } from "react-unity-webgl";

const UnityGame = () => {

    // const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    //     loaderUrl: process.env.PUBLIC_URL + "/Build/game/StudyWar/Build/StudyWar.loader.js",
    //     dataUrl: process.env.PUBLIC_URL + "/Build/game/StudyWar/Build/StudyWar.data.unityweb",
    //     frameworkUrl: process.env.PUBLIC_URL + "/Build/game/StudyWar/Build/StudyWar.framework.js.unityweb",
    //     codeUrl: process.env.PUBLIC_URL + "/Build/game/StudyWar/Build/StudyWar.wasm.unityweb"
    // });

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return <div className='game-container'>
        {/* {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
        <Unity style={{height: '600px', width: '960px', visibility: isLoaded ? "visible" : "hidden", margin: '0 auto'}}unityProvider={unityProvider}/> */}
        <iframe
            src="https://matthew1219mt.github.io/StudyWar/"
            className='game'
            title="StudyWar"
            width="1010"
            height="650"
            style={{visibility: isLoaded ? "visible" : "hidden"}}
            onLoad={()=>{setIsLoaded(true)}}
        />
    </div>
}

export default UnityGame;