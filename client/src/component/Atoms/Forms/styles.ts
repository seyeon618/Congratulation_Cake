import { FormLabel, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Label = styled(FormLabel)`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 6%;
  color: #9333ea;
  font-family: var(--chab-font);
  text-align: center;
  font-size: 35px;
`;

export const PasswordBox = styled("div")`
  width: 100px;
  height: 100px;
  background-color: ${(props: { isError: boolean }) => (props.isError ? "red" : "green")};
`;

export const ButtonWrap = styled("div")`
  width: 50%;
  margin: auto;
  margin-bottom: 10%;
`;

export const UploadButtonWrap = styled("div")`
  width: 50%;
  margin: auto;
  margin-bottom: 10%;
  margin-top: 20%;
`;

export const Complete = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15%;
  color: #9333ea;
  font-family: var(--chab-font);
  text-align: center;
  font-size: 35px;
  white-space: pre-line;

  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 90%;

  background: linear-gradient(180deg, #fffdff 0%, #852ed4 78.65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ImageWrap = styled("div")`
  position: absolute;
`;

export const UploadImageWrap = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  top: 10%;
`;

export const GuideMessage = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  top: 70%;
  font-size: 0.5rem;
  color: #8511ee;
  white-space: pre-line;
  text-align: center;
`;

export const LinkText = styled("div")`
  margin-top: 30px;
  margin-bottom: 30px;
  min-width: 300px;
  max-width: 400px;
  width: 50vw;
  text-align: center;
  background-color: rgba(217, 217, 217, 0.8);
  border-radius: 10px;

  cursor: pointer;

  :hover {
    background-color: rgba(217, 217, 217, 1);
  }
`;

export const StyledInput = styled("input")`
  display: none;
`;

export const StyledLabel = styled("div")`
  position: absolute;
  margin-top: 15%;
  font-size: 0.5rem;
  color: #8511ee;
`;

export const Question = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20%;
`;

export const MessageBox = styled(TextareaAutosize)`
  width: 100%;
  display: flex;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  border-color: purple;
  border-radius: 5px;
`;
