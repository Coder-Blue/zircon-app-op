import React, { useRef } from "react";
import play from "../../assets/playaudio.svg";

function Heading({ audioUrl, word, phonetic }) {
  const ref = useRef();

  const playAudio = () => {
    ref.current.play();
  };

  return (
    <div className="my-5 flex flex-row justify-between font-outfit">
      <h3 className="font-serif text-3xl font-bold capitalize">
        {word}
        <span className="block text-sm font-normal text-blue-500">
          {phonetic}
        </span>
      </h3>
      <button
        onClick={playAudio}
        className="flex h-12 w-12 flex-row items-center justify-center rounded-full bg-indigo-100 hover:bg-blue-400"
      >
        <img width={18} src={play} />
      </button>

      <audio className="hidden" ref={ref} src={audioUrl} />
    </div>
  );
}

export default Heading;
