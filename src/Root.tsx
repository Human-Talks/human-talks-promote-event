import { Composition } from 'remotion';
import { HumanTalkIntro } from './HumanTalkIntro';
import { talk } from "./talk";

export const RemotionRoot: React.FC = () => {
	return (
    <Composition
      id="HumanTalkIntro"
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      component={HumanTalkIntro}
      defaultProps={talk}
    />
  );
};
