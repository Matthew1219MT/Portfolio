import './UnityGame.css';
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityGame = () => {

    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: "Build/game/StudyWar/Build/StudyWar.loader.js",
        dataUrl: "Build/game/StudyWar/Build/StudyWar.data.unityweb",
        frameworkUrl: "Build/game/StudyWar/Build/StudyWar.framework.js.unityweb",
        codeUrl: "Build/game/StudyWar/Build/StudyWar.wasm.unityweb"
    });

    return <div className='game-container'>
        {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
        <Unity style={{height: '600px', width: '960px', visibility: isLoaded ? "visible" : "hidden", margin: '0 auto'}}unityProvider={unityProvider}/>
    </div>
}

export default UnityGame;