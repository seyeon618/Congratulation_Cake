import Button from "@/component/Atoms/Button";
import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";

import Image from "next/image";
import { useRouter } from "next/router";
import { Link, MakeButtonWrap, CongraturationCompleteCake, HintMessage, StyledLabel, Question } from "./styles";
import Cake1 from "@/asset/images/Cake_1.png";
import Cake2 from "@/asset/images/Cake_2.png";
import Cake3 from "@/asset/images/Cake_3.png";
import Cake4 from "@/asset/images/Cake_4.png";
import getCake from "@/apis/get/getCake";
import { LinkText } from "../Forms/styles";
import copy from "copy-to-clipboard";

interface Props {
  preAction?: any;
  cakeId: number;
}

const cakeImages = [Cake1, Cake2, Cake3, Cake4];

function CelebrateCompleteCake({ preAction, cakeId }: Props) {
  const router = useRouter();

  const { data } = getCake(cakeId);

  const cakeLink = `https://congratulation.today/cake/${cakeId}`;

  const goMainPage = () => {
    router.push("/");
  };

  return (
    <CommonBackground onClickAction={preAction}>
      <CongraturationCompleteCake>
        {data && <Image src={cakeImages[data.cake_design_id - 1]} alt={`cake-image-${cakeId}`} width={192} height={192} />}
      </CongraturationCompleteCake>
      <MakeButtonWrap>
        <Button label="Make new cake!" Action={goMainPage} />
      </MakeButtonWrap>
      <Card>
        <Question>
          <StyledLabel>{"특별한 케이크와 메시지는 \n 기념일이 되면 \n 수신인이 확인할 수 있어!"}</StyledLabel>
        </Question>
      </Card>
      <LinkText
        onClick={() => {
          router.push(cakeLink);
        }}
      >
        {cakeLink}
      </LinkText>
      <Button
        label={"Copy Link"}
        Action={() => {
          copy(cakeLink);
        }}
      />
      <HintMessage>다른 친구에게도 전해주기</HintMessage>
    </CommonBackground>
  );
}

export default CelebrateCompleteCake;
