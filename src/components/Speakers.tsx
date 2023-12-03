import { loadFont } from "@remotion/google-fonts/Roboto";
import { Img, staticFile } from "remotion";
const { fontFamily } = loadFont();

type SpeakersProps = {
  speakers: SpeakerProps[];
};

export const Speakers = ({ speakers }: SpeakersProps) => {
  return (
    <div style={{
      display: "flex",
      gap: "10%",
      height: "34%",
      justifyContent: "center"
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
