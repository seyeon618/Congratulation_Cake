import { styled } from "@mui/material/styles";

export const ImageWrap = styled("div")`
  position: absolute;
  top: 30%;
`;

export const CakeImageWrap = styled("div")`
  width: 100%;
`;

export const ButtonWrap = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export const MakeButtonWrap = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  left: 30%;
  margin-bottom: 5%;
  width: auto;
`;

export const Label = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: var(--chab-font);
  text-align: center;
  font-size: 20px;
  white-space: pre-line;

  color: ${(props: { isGradient: boolean }) => (props.isGradient ? "rgba(133, 17, 238, 0.7)" : "#9333ea")};
`;

export const LabelWrap = styled("div")`
  position: relative;
  top: 55%;
`;

export const StyledLabel = styled("div")`
  position: absolute;
  margin-top: 15%;
  font-size: 18px;
  color: #8511ee;
  white-space: pre-line;
  text-align: center;
`;

export const Question = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 80%;
`;

export const Link = styled("div")`
  position: absolute;
  top: 105%;
  width: 30%;
  text-align: center;
  background-color: rgba(217, 217, 217, 0.8);
  border-radius: 10px;
`;

export const HintMessage = styled("div")`
  font-family: var(--scdream3-font);
  margin-top: 5%;
  font-weight: bolder;
`;
