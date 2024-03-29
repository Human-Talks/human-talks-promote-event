import { Composition, Folder } from 'remotion';
import { HumanTalkIntro } from './HumanTalkIntro';
import { talks } from "./talk";

export const RemotionRoot: React.FC = () => {
	return (
    <>
    <Folder name="HT-Nantes-Avril">
      {talks.map(talk => (
        <Composition
          id={talk.pos}
          durationInFrames={120}
          fps={30}
          width={1200}
          height={1200}
          component={HumanTalkIntro}
          defaultProps={talk}
        />
      ))}
    </Folder>
    </>
  );
};
