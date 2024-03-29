import { AbsoluteFill } from "remotion";
import { Background, Logo, Title, Speakers, EventInfo } from "./components";
import { Talk } from "./talk";

export const HumanTalkIntro = (talk: Talk) => {
  return (
    <>
      <Background />
      <AbsoluteFill style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Logo />
        <Title text={talk.title}/>
        <Speakers speakers={talk.speakers} />
        <EventInfo {...talk.info} />
      </AbsoluteFill>
    </>
  );
};
