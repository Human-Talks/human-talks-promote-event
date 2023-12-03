import {interpolate} from 'remotion'
import { loadFont } from "@remotion/google-fonts/Roboto";
import { useCurrentFrame } from "remotion";
const { fontFamily } = loadFont();

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <div style={{
      color: "#FFFFFF",
      fontFamily,
      fontSize: "80px",
      fontWeight: 600,
      opacity,
      textAlign: "center"
    }}>{ text }</div>
  );
};
