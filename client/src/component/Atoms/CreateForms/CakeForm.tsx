import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import CakeSelector from "@/component/Atoms/CakeSelector";
import Button from "@/component/Atoms/Button";

interface Props {
  preAction?: any;
  nextAction?: any;
}

function CakeForm({ preAction, nextAction }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>Pick a cake design</div>
        <CakeSelector />
        <Button label="Next" Action={nextAction} />
      </Card>
    </CommonBackground>
  );
}

export default CakeForm;
