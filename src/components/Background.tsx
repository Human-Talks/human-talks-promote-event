import { AbsoluteFill, Img, staticFile } from "remotion";
 
export const Background = () => {
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Img src={staticFile("background.png")} />
      </AbsoluteFill>
      <AbsoluteFill style={{
        backgroundColor: "#790257",
        opacity: 0.7
      }} />
    </AbsoluteFill>
  );
};
