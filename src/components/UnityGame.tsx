import { useState, useEffect } from 'react';
import './UnityGame.css';

function useWindowSize() {
  const hasWindow = typeof window !== 'undefined';

  const getSize = () => ({
    width: hasWindow ? window.innerWidth : 0,
    height: hasWindow ? window.innerHeight : 0,
  });

  const [size, setSize] = useState(getSize);

  useEffect(() => {
    if (!hasWindow) return;
    let rAF = 0;
    const onResize = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => setSize(getSize()));
    };
    window.addEventListener('resize', onResize);
    onResize(); // set initial
    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener('resize', onResize);
    };
  }, [hasWindow]);

  return size;
}

const UnityGame = () => {

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { width, height } = useWindowSize();

  return <div className='game-container'>
    {width >= 1000 && <iframe
      src="https://matthew1219mt.github.io/StudyWar/"
      className='game'
      title="StudyWar"
      width="1010"
      height="650"
      style={{ visibility: isLoaded ? "visible" : "hidden" }}
      onLoad={() => { setIsLoaded(true) }}
    />}
    <div className='mobile'>You screen is too small, get a larger screen for the game : )</div>
  </div>
}

export default UnityGame;