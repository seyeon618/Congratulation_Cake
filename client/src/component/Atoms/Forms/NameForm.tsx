import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import InputBox from "@/component/Atoms/InputBox";

interface Props {
  preBtnAction: any;
  nextAction: any;
  text: string;
  guideText: string;
}

function NameForm({ preBtnAction, nextAction, text, guideText }: Props) {
  return (
    <CommonBackground onClickAction={preBtnAction}>
      <Card>
        <InputBox onKeyPress={nextAction} text={text} guideText={guideText}></InputBox>
      </Card>
    </CommonBackground>
  );
}

export default NameForm;
