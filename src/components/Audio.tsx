import React from "react";
import violinMp3 from "../assets/violin.mp3";

interface AudioProps {
  visibleAudio: boolean;
  onTimeUpdate: () => void;
}
export const AudioComponent = React.forwardRef(
  (
    { visibleAudio, onTimeUpdate }: AudioProps,
    ref: React.ForwardedRef<HTMLAudioElement>
  ) => {
    return (
      <div
        className="container-audio"
        style={{
          display: `${visibleAudio ? "flex" : "none"}`,
        }}
      >
        <audio autoPlay onTimeUpdate={onTimeUpdate} ref={ref} controls>
          <source src={violinMp3} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }
);
