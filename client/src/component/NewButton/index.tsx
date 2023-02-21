import { StyledButton } from "./styles";

interface Props {
  text: string;
}

function NewButton({ text }: Props) {
  return (
    <div>
      <StyledButton variant="contained">{text}</StyledButton>
    </div>
  );
}

export default NewButton;
