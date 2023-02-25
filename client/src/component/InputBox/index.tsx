import { StyledInput, StyledInputWrap } from "./styles";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onKeyPress: (e: any) => void;
}

function InputBox({ onKeyPress }: Props) {
  const handleKeyPress = () => onKeyPress;
  return (
    <StyledInputWrap>
      <form>
        <StyledInput variant="standard" onKeyPress={handleKeyPress()} />
      </form>
    </StyledInputWrap>
  );
}

export default InputBox;
