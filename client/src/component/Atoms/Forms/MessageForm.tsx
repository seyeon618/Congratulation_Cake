import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";

interface Props {
  preAction?: any;
  nextAction?: any;
}

function MessageForm({ preAction, nextAction }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>Message를 입력하세요</div>
        <Button label="Done" Action={nextAction} />
      </Card>
    </CommonBackground>
  );
}

export default MessageForm;
