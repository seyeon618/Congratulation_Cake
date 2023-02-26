import { styled } from "@mui/material/styles";

export const MessageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageBox = styled("div")`
  width: 500px;
  height: 100px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
`;

export const Circle = styled("div")`
  position: relative;
  background-color: #d9d9d9;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const ModalContainer = styled("div")`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: fit-content;
  outline: 0;
`;

export const MessageWrapper = styled("div")`
  width: 200px;
  height: 150px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalMessage = styled("div")`
  font-size: 15px;
  position: absolute;
  /* word-break: break-all; */
`;
