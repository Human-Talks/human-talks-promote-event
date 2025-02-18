import { interpolate, useCurrentFrame, staticFile } from 'remotion'
import { loadFont } from "@remotion/google-fonts/Roboto";
import { Img } from "remotion";
const { fontFamily } = loadFont();

type SpeakersProps = {
  speakers: SpeakerProps[];
};

export const Speakers = ({ speakers }: SpeakersProps) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [30, 60], [0, 1]);

  return (
    <div style={{
      display: "flex",
      gap: "160px",
      width: "100%",
      justifyContent: "center",
      opacity
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
      gap: "28px",
      width: "20%"
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
