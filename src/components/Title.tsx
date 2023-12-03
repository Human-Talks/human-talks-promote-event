import { loadFont } from "@remotion/google-fonts/Roboto";
const { fontFamily } = loadFont();

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return (
    <div style={{
      color: "#FFFFFF",
      fontFamily,
      fontSize: "80px",
      fontWeight: 600,
      textAlign: "center"
    }}>{ text }</div>
  );
};
