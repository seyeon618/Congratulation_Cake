import { FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Background = styled("div")`
  /* 메인 배경 */
  height: 100vh;
  background: #8a90c6;
  overflow: hidden;
`;

export const BackgroundImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

export const Inner = styled("div")`
  position: absolute;
  width: 100%;
  top: 10%;
  left: 10%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled("div")`
  background-color: white;
  position: absolute;
  top: 20%;
  left: 15%;
  width: 70%;
  height: 60%;
  border-radius: 55px;
`;

export const Label = styled(FormLabel)`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 6%;
  color: #9333ea;
`;
