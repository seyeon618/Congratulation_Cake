import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import CakeSelector from "@/component/Atoms/CakeSelector";
import Button from "@/component/Atoms/Button";

interface Props {
  preAction?: any;
  nextAction?: any;
  setSelectedCake?: any;
  selectedCake?: any;
}

function CakeForm({ preAction, nextAction, setSelectedCake, selectedCake }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>Pick a cake design</div>
        <CakeSelector setSelectedCake={setSelectedCake} selectedCake={selectedCake} />
        <Button label="Next" Action={nextAction} />
      </Card>
    </CommonBackground>
  );
}

export default CakeForm;
