import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";

interface Props {
  preAction?: any;
  nextAction?: any;
}

function WriterForm({ preAction, nextAction }: Props) {
  const handleInput = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextAction();
    }
  };

  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <div>To.</div>

        <input type="text" onKeyDown={handleInput} />
        <div>너의 이름이나 닉네임을 적어줘</div>
      </Card>
    </CommonBackground>
  );
}

export default WriterForm;
