import { Background, Logo, Title, Speakers, EventInfo } from "./components";
import { Talk } from "./talk";

export const HumanTalkIntro = (talk: Talk) => {
  return (
    <>
      <Background />
      <Logo />
      <Title text={talk.title}/>
      <Speakers speakers={talk.speakers} />
      <EventInfo {...talk.info} />
    </>
  );
};
