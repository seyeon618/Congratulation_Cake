import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import Button from "@/component/Atoms/Button";

interface Props {
  preAction?: any;
  nextAction?: any;
}

function WaitCake({ preAction, nextAction }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>케이크 이미지</div>
        <div>You can open it 4-day Please wait with Excitement✨</div>
        <Button label="Change Cake Design" Action={nextAction} />
      </Card>
    </CommonBackground>
  );
}

export default WaitCake;
