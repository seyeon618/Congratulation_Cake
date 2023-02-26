import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import Label from "@/component/Atoms/Label";
import { ButtonWrap, MessageBox } from "./styles";

interface Props {
  preAction?: any;
  nextAction?: any;
  setState: any;
}

function MessageForm({ preAction, nextAction, setState }: Props) {
  const handleChange = (e: any) => {
    setState(e.target.value);
  };

  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <Label text={"Send a \n Message!"} />
        <MessageBox aria-label="empty textarea" placeholder="Please enter a message" style={{ width: 200, height: 150 }} onChange={handleChange} />
        <ButtonWrap>
          <Button label="Done" Action={nextAction} />
        </ButtonWrap>
      </Card>
    </CommonBackground>
  );
}

export default MessageForm;
