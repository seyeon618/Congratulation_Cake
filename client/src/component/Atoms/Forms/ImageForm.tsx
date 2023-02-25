import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";

interface Props {
  preAction?: any;
  nextAction?: any;
}

function ImageForm({ preAction, nextAction }: Props) {
  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>Image 업로드 하세요</div>
        <Button label="Image Upload" Action={nextAction} />
      </Card>
    </CommonBackground>
  );
}

export default ImageForm;
