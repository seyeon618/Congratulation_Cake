import { styled } from "@mui/material/styles";

export const Background = styled("div")`
  /* 메인 배경 */
  height: 100vh;
  background: #9195ed;
  overflow: hidden;
`;

export const BackgroundImageWrapper = styled("div")`
  display: flex;
  justify-content: center;

  #cake_main {
    position: absolute;
    top: 30%;
  }

  #cake_1 {
    position: absolute;
    margin-left: 200px;
  }

  #cake_2 {
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
`;

export const Inner = styled("div")`
  position: absolute;
  width: 100%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Celebrate = styled("div")`
  position: relative;
  height: 59px;

  font-family: var(--aldrich-font);
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 59px;
  -webkit-text-stroke: 1px white;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;

  background: linear-gradient(180deg, rgba(246, 145, 255, 0) 0%, #f474ff 79.69%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ButtonWrap = styled("div")`
  position: absolute;
  top: 170%;
`;
