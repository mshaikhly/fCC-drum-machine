import React from 'react';
import '../App.css'; // Make sure this path is correct based on your project structure
import Drum from './Drum';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { playClip } from '../store/audioClipSlice';

function App() {
  const audioClips = useAppSelector((state) => state.audioClips);
  const dispatch = useAppDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    dispatch(playClip(e.key.toUpperCase()));
  };

  return (
    <div className="container text-center my-5" id="drum-machine" onKeyDown={handleKeyDown} tabIndex={0}>
      <h1>FCC Drum Machine</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default App;
