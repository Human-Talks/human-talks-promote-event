import { interpolate } from 'remotion'
import { loadFont } from "@remotion/google-fonts/Roboto";
import { useCurrentFrame } from "remotion";
const { fontFamily } = loadFont();

type EventInfoProps = {
  date: string;
  place: string;
};

export const EventInfo = ({ date, place }: EventInfoProps) => {
  const frame = useCurrentFrame();
  const top = interpolate(frame, [0, 10], [100, 0], { extrapolateRight: "clamp" });

  return (
    <div style={{
      color: "#FFFFFF",
      fontFamily,
      fontSize: "30px",
      fontWeight: 600,
      top: `${top}px`,
      textAlign: "left"
    }}>{ date } - { place }</div>
  );
};
