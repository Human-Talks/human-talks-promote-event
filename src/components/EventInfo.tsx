import { interpolate } from 'remotion'
import { loadFont } from "@remotion/google-fonts/Roboto";
import { useCurrentFrame } from "remotion";
const { fontFamily } = loadFont();

type EventInfoProps = {
  city: string;
  date: string;
  place: string;
};

export const EventInfo = ({ city, date, place }: EventInfoProps) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [45, 75], [0, 1]);

  return (
    <div style={{
      color: "#FFFFFF",
      fontFamily,
      fontSize: "50px",
      fontWeight: 600,
      display: "flex",
      justifyContent: "center",
      gap: "10%",
      width: "100%",
      opacity
    }}>
      <span>{ city }</span>
      <span>📍 { place }</span>
      <span>🗓️ { date }</span>
    </div>
  );
};
