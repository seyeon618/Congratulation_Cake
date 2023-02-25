import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";

interface Props {
  children: React.ReactNode;
  preBtnAction: any;
}

function NameForm({ children, preBtnAction }: Props) {
  return (
    <CommonBackground onClickAction={preBtnAction}>
      <Card>{children}</Card>
    </CommonBackground>
  );
}

export default NameForm;
