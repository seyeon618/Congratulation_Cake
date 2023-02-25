import { FormLabel } from "@mui/material";
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

export const GuideMessage = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  top: 65%;
  font-size: 0.5rem;
  color: #8511ee;
  white-space: pre-line;
  text-align: center;
`;

export const Link = styled("div")`
  position: absolute;
  top: 105%;
  width: 30%;
  text-align: center;
  background-color: rgba(217, 217, 217, 0.8);
  border-radius: 10px;
`;

export const StyledInput = styled("input")`
  display: none;
`;
