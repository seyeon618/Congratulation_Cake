import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import { useRouter } from "next/router";

interface Props {
  preAction?: any;
}

function CelebrateCompleteCake({ preAction }: Props) {
  const router = useRouter();

  const goMainPage = () => {
    router.push("/");
  };

  return (
    <CommonBackground onClickAction={preAction}>
      <Button label="나도 케이크 만들래" Action={goMainPage} />
      <Card>
        <div>케이크 이미지</div>
        <div>특별한 케이크와 메시지는 기념일이 되면 수신인이 확인 할 수 있어!</div>
        <div>다른 친구에게도 전해주기</div>
        <div>Link</div>
      </Card>
    </CommonBackground>
  );
}

export default CelebrateCompleteCake;
