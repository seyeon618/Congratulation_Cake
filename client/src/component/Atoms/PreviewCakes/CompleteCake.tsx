import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";

interface Props {
  preAction?: any;
}

function CompleteCake({ preAction }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>Complete!</div>
        <div>케이크 이미지</div>
        <div>Cake Link</div>
      </Card>
    </CommonBackground>
  );
}

export default CompleteCake;
