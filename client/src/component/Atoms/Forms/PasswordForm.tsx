import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import InputPw from "@/component/Atoms/InputPw";

interface Props {
  preAction?: any;
  nextAction?: any;
  text?: string;
}

function PasswordForm({ preAction, nextAction, text }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>{text}</div>
        <InputPw onKeyPress={nextAction}></InputPw>
      </Card>
    </CommonBackground>
  );
}

export default PasswordForm;
