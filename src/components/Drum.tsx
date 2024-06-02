import { Button } from "react-bootstrap";
import { AudioClip } from "../types";
import { useAppDispatch } from '../store/hooks';
import { playClip } from '../store/audioClipSlice';

interface DrumProps {
  audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
  const dispatch = useAppDispatch();

  return (
    <Button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => dispatch(playClip(audioClip.keyTrigger))}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip"></audio>
      {audioClip.keyTrigger}
    </Button>
  );
};

export default Drum;
