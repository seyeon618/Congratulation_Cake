import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";

import Image from "next/image";
import { useRouter } from "next/router";
import { Link, MakeButtonWrap, ImageWrap, HintMessage, StyledLabel, Question } from "./styles";
import Cake1 from "@/asset/images/Cake_1.png";
import Cake2 from "@/asset/images/Cake_2.png";
import Cake3 from "@/asset/images/Cake_3.png";
import Cake4 from "@/asset/images/Cake_4.png";

interface Props {
  preAction?: any;
  cakeId: number;
}

const cakeImages = [Cake1, Cake2, Cake3, Cake4];

function CelebrateCompleteCake({ preAction, cakeId }: Props) {
  const router = useRouter();

  const goMainPage = () => {
    router.push("/");
  };

  return (
    <CommonBackground onClickAction={preAction}>
      <ImageWrap>
        <Image src={cakeImages[cakeId - 1]} alt={`cake-image-${cakeId}`} width={192} height={192} />
      </ImageWrap>
      <MakeButtonWrap>
        <Button label="Make new cake!" Action={goMainPage} />
      </MakeButtonWrap>
      <Card>
        <Question>
          <StyledLabel>{"특별한 케이크와 메시지는 \n 기념일이 되면 \n 수신인이 확인할 수 있어!"}</StyledLabel>
        </Question>
      </Card>
      <Link>Link</Link>
      <HintMessage>다른 친구에게도 전해주기</HintMessage>
    </CommonBackground>
  );
}

export default CelebrateCompleteCake;
