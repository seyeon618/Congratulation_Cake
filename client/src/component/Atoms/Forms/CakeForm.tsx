import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import CakeSelector from "@/component/Atoms/CakeSelector";
import Button from "@/component/Atoms/Button";
import axios from "axios";
import { baseUrl } from "@/constant/api";

interface Props {
  preAction?: any;
  nextAction?: any;
  setSelectedCake?: any;
  selectedCake?: any;
  cakeId?: number;
}

function CakeForm({ preAction, nextAction, setSelectedCake, selectedCake, cakeId }: Props) {
  const handleNextAction = () => {
    const url = `${baseUrl}/cake/${cakeId}`;

    // const requestData = {
    //   cakeId: cakeId,
    //   cakeDesign: selectedCake,
    // };

    const requestData = {
      cake_id: 2,
      cake_design_id: 1,
    };

    axios.put(url, requestData).then((res) => {
      console.log(res);
      // nextAction();
    });
  };

  return (
    <CommonBackground onClickAction={preAction}>
      <div onClick={handleNextAction}>here</div>
      <Card>
        <div>Pick a cake design</div>
        <CakeSelector setSelectedCake={setSelectedCake} selectedCake={selectedCake} />
        <Button label="Next" Action={handleNextAction} />
      </Card>
    </CommonBackground>
  );
}

export default CakeForm;
