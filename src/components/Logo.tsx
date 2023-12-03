import { Img, staticFile } from "remotion";
 
export const Logo = () => {
  return (
    <Img
      src={staticFile("logo.png")}
      width="20%"
    />
  );
};
