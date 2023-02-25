import { StyledInput, StyledInputWrap, Question, StyledLabel } from "./styles";
import Label from "@/component/Atoms/Label";
import Image from "next/image";
import QuestionImg from "@/asset/images/Question.png";

interface Props {
  onKeyPress: (e: any) => void;
  text: string;
  guideText: string;
}

function InputBox({ onKeyPress, text, guideText }: Props) {
  const handleKeyPress = () => onKeyPress;
  return (
    <div>
      <Label text={text} />
      <StyledInputWrap>
        <form>
          <StyledInput variant="standard" onKeyPress={handleKeyPress()} />
        </form>
      </StyledInputWrap>
      <Question>
        <Image src={QuestionImg} alt={"question"} />
        <StyledLabel>{guideText}</StyledLabel>
      </Question>
    </div>
  );
}

export default InputBox;
