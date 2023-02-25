import { StyledLabel } from "./styles";

interface Props {
  text?: string;
}

function Label({ text }: Props) {
  return <StyledLabel>{text}</StyledLabel>;
}

export default Label;
