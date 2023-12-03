import { AbsoluteFill, useVideoConfig } from "remotion";
 
export const HumanTalksIntro = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();
 
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 60,
        backgroundColor: "white",
      }}
    >
      This {width}x{height}px video is {durationInFrames / fps} seconds long.
    </AbsoluteFill>
  );
};
