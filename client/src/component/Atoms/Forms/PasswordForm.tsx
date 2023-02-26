import CommonBackground from "@/component/Common/CommonBackground";
import { Label, PasswordBox } from "./styles";
import Card from "@/component/Atoms/Card";
import InputPw from "@/component/Atoms/InputPw";

interface Props {
  preAction?: any;
  nextAction?: any;
  text?: string;
  password: string;
  setPassword: any;
  showGuideMessage?: boolean;
}

function PasswordForm({ preAction, nextAction, text, password, setPassword }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        {/* <PasswordBox isError={true} />
        <PasswordBox isError={false} /> */}
        <Label>{text}</Label>
        <InputPw onKeyPress={nextAction} password={password} setPassword={setPassword}></InputPw>
      </Card>
    </CommonBackground>
  );
}

export default PasswordForm;
