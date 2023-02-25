import CommonBackground from "@/component/CommonBackground";
import Card from "@/component/Card";

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
