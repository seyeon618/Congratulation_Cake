import CommonBackground from "@/component/Common/CommonBackground";
import { Label, PasswordBox } from "./styles";
import Card from "@/component/Atoms/Card";
import InputPw from "@/component/Atoms/InputPw";

interface Props {
  preAction?: any;
  nextAction?: any;
  text?: string;
  showGuideMessage: boolean;
}

function PasswordForm({ preAction, nextAction, text, showGuideMessage }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        {/* <PasswordBox isError={true} />
        <PasswordBox isError={false} /> */}
        <Label>{text}</Label>
        <InputPw onKeyPress={nextAction}></InputPw>
      </Card>
    </CommonBackground>
  );
}

export default PasswordForm;
