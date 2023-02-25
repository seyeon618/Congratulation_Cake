import { styled } from "@mui/material/styles";

export const ImageWrap = styled("div")`
  position: absolute;
  top: 10%;
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

export const ButtonWrap = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;
