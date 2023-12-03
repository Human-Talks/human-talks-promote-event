import { Composition } from 'remotion';
import { HumanTalksIntro } from './HumanTalksIntro';

export const RemotionRoot: React.FC = () => {
	return (
    <Composition
      id="HumanTalksIntro"
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      component={HumanTalksIntro}
    />
  );
};
