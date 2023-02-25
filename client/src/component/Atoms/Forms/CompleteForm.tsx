import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";

interface Props {
  preAction?: any;
  selectedCake?: number;
}

function CompleteCake({ preAction, selectedCake }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>Complete</div>
        <div>현재 선택된 케이크{selectedCake}</div>
        <div>링크를 공유하고, 친구들에게 메시지가 담긴 토퍼를 받아보자</div>
      </Card>
      <div>Link</div>
    </CommonBackground>
  );
}

export default CompleteCake;
