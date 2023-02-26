import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import CakeSelector from "@/component/Atoms/CakeSelector";
import Button from "@/component/Atoms/Button";
import Label from "@/component/Atoms/Label";
import { ButtonWrap } from "./styles";
import axios from "axios";
import { baseUrl } from "@/constant/api";

interface Props {
  preAction?: any;
  nextAction?: any;
  setSelectedCake?: any;
  selectedCake?: any;
  cakeId: number;
}

function CakeForm({ preAction, nextAction, setSelectedCake, selectedCake, cakeId }: Props) {
  const handleNextAction = () => {
    const url = `${baseUrl}/cake/${cakeId}`;

    const requestData = {
      cake_id: cakeId,
      cake_design_id: selectedCake,
    };

    axios.put(url, requestData).then((res) => {
      console.log(res);
      nextAction();
    });
  };

  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <Label text={"Pick a \n cake design"} />
        <CakeSelector setSelectedCake={setSelectedCake} selectedCake={selectedCake} />
        <ButtonWrap>
          <Button label="Next" Action={handleNextAction} disable={selectedCake == 0} />
        </ButtonWrap>
      </Card>
    </CommonBackground>
  );
}

export default CakeForm;
