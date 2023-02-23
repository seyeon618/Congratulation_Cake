import { styled } from "@mui/material/styles";

export const Background = styled("div")`
  /* 메인 배경 */
  height: 100vh;
  background: linear-gradient(180deg, #858aeb 0%, rgba(133, 138, 235, 0) 100%);
  overflow: hidden;
`;

export const BackgroundImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

export const Inner = styled("div")`
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
