import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
 
export const Logo = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <Img style={{
      opacity
    }}
      src={staticFile("logo.png")}
      width="20%"
    />
  );
};
