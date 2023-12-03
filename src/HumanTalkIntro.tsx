import { AbsoluteFill } from "remotion";
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
      <AbsoluteFill style={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6%"
      }}>
        <Logo />
        <Title text={talk.title} />
        <Speakers speakers={talk.speakers} />
      </AbsoluteFill>
    </>
  );
};
