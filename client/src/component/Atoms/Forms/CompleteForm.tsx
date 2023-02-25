import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import { Complete, ImageWrap, GuideMessage, LinkText } from "./styles";
import Button from "@/component/Atoms/Button";

import Image from "next/image";
import Cake1 from "@/asset/images/Cake_1.png";
import Cake2 from "@/asset/images/Cake_2.png";
import Cake3 from "@/asset/images/Cake_3.png";
import Cake4 from "@/asset/images/Cake_4.png";

import copy from "copy-to-clipboard";
import { useRouter } from "next/router";

interface Props {
  preAction?: any;
  selectedCake: number;
  cakeLink: string;
}

const cakeImages = [Cake1, Cake2, Cake3, Cake4];

function CompleteCake({ preAction, selectedCake, cakeLink }: Props) {
  const router = useRouter();

  return (
    <CommonBackground onClickAction={preAction}>
      <Card>
        <Complete>{"Complete"}</Complete>
        <GuideMessage>{"링크를 공유하고, \n 친구들에게 메시지가 담긴 \n 토퍼를 받아보자"}</GuideMessage>
      </Card>
      <ImageWrap>
        <Image src={cakeImages[selectedCake - 1]} alt={`cake-image-${selectedCake}`} width={323} height={323} />
      </ImageWrap>
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
    </CommonBackground>
  );
}

export default CompleteCake;
