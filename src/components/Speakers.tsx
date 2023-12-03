import {interpolate, useCurrentFrame} from 'remotion'
import { loadFont } from "@remotion/google-fonts/Roboto";
import { Img, staticFile } from "remotion";
const { fontFamily } = loadFont();

type SpeakersProps = {
  speakers: SpeakerProps[];
};

export const Speakers = ({ speakers }: SpeakersProps) => {
  const frame = useCurrentFrame();
  const top = interpolate(frame, [0, 10], [420, 0], { extrapolateRight: "clamp" });

  return (
    <div style={{
      position: "absolute",
      display: "flex",
      gap: "10%",
      height: "28%",
      justifyContent: "center",
      top: `${top}px`
    }}>
      { speakers.map(speaker =>
        <Speaker
          name={speaker.name}
          pic={speaker.pic}
        />
      )}  
    </div>
  );
};

type SpeakerProps = {
  name: string;
  pic: string;
};

const Speaker = ({ name, pic }: SpeakerProps) => {
  return (
    <div style={{
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "12%"
    }}>
      <Img style={{
        border: "4px solid white",
        borderRadius: "50%"
      }}
        src={staticFile(pic)}
        width="100%"
      />
      <div style={{
        color: "white",
        fontFamily,
        fontSize: "32px",
        textAlign: "center"
      }}>
        { name }
      </div>
    </div>
  );
};
