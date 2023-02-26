import { styled } from "@mui/material/styles";

export const Background = styled("div")`
  /* 메인 배경 */
  height: 1700px;

  background: #9195ed;
  overflow: hidden;
`;

export const Container = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Title = styled("div")`
  font-size: 35px;
`;

export const ImageWrapper = styled("div")`
  position: absolute;
  top: 28%;
`;

export const CakeCanvas = styled("div")`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageList = styled("div")`
  position: absolute;
  top: 100%;

  width: 768px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const MessageTitle = styled("div")`
  font-size: 30px;
`;

export const DownloadText = styled("div")`
  font-size: 20px;
  cursor: pointer;
  background-color: #9d559d;
  border-radius: 10px;
  padding: 10px;
  color: white;
`;

export const TitleWrap = styled("div")``;
