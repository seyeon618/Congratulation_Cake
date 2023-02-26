import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import CompleteCake from "@/component/Atoms/Forms/CompleteForm";

interface Props {
  selectedCake: number;
  cakeId: number;
}

function EditCompleteCake({ selectedCake, cakeId }: Props) {
  return <CompleteCake selectedCake={selectedCake} cakeLink={`https://www.congratulation.today/cake/${cakeId}`} />;
}

export default EditCompleteCake;
