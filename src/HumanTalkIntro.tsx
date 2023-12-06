import { AbsoluteFill, Sequence } from "remotion";
import { Background, Logo, Title, Speakers, EventInfo } from "./components";
import { Talk } from "./talk";

export const HumanTalkIntro = (talk: Talk) => {
  return (
    <>
      <Background />

      <Sequence>
        <AbsoluteFill style={{
          alignItems: "center",
          top: "8%",
        }}>
          <Logo />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={15}>
        <AbsoluteFill style={{
          alignItems: "center",
          top: "32%",
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
          top: "58%",
        }}>
          <Speakers speakers={talk.speakers} />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={38}>
        <AbsoluteFill style={{
          alignItems: "center",
          top: "95%"
        }}>
          <EventInfo {...talk.info} />
        </AbsoluteFill>
      </Sequence>
    </>
  );
};
