import { AbsoluteFill, Sequence } from "remotion";
import { Background, Logo, Title, Speakers } from "./components";

const talk = {
  title: "Human Talks Nantes, how to become an organizer",
  speakers: [{
    name: "Jean-Phi Baconnais",
    pic: "jeanPhi.jpeg"
  }, {
    name: "Julien Tanguy",
    pic: "julien.jpeg"
  }, {
    name: "Alexis Lozano",
    pic: "alexis.jpeg"
  }]
};

export const HumanTalkIntro = () => {
  return (
    <>
      <Background />

      <Sequence>
        <AbsoluteFill style={{
          alignItems: "center",
          top: "10%",
        }}>
          <Logo />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={15}>
        <AbsoluteFill style={{
          alignItems: "center",
          top: "35%",
        }}>
          <div style={{
            width: "80%"
          }}>
            <Title text={talk.title}/>
          </div>
        </AbsoluteFill>
      </Sequence>

      <Sequence from={30}>
        <AbsoluteFill style={{
          alignItems: "center",
          top: "62%",
        }}>
          <Speakers speakers={talk.speakers} />
        </AbsoluteFill>
      </Sequence>
    </>
  );
};
