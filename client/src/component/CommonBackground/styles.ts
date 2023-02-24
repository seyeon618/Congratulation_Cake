import { styled } from "@mui/material/styles";

export const FillBackground = styled("div")`
  /* 메인 배경 */
  height: 100vh;
  background: #9195ed;
  overflow: hidden;
`;

export const BackgroundImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

export const Inner = styled("div")`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
