import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import CompleteCake from "@/component/Atoms/Forms/CompleteForm";

interface Props {
  selectedCake: number;
}

function EditCompleteCake({ selectedCake }: Props) {
  return <CompleteCake selectedCake={selectedCake} cakeLink={"0"} />;
}

export default EditCompleteCake;
