import { styled } from "@mui/material/styles";

export const Container = styled("div", {
  shouldForwardProp: (prop) => prop !== "topLocation" && prop !== "leftLocation",
})<{ topLocation: number; leftLocation: number }>`
  position: Relative;

  top: ${({ topLocation }) => topLocation}px;
  left: ${({ leftLocation }) => leftLocation}px;

  width: 100px;
  height: 200px;
`;

export const ImageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PictureContainer = styled("div")`
  position: relative;
  top: 20px;
`;
