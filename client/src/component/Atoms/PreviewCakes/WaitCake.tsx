import CommonBackground from "@/component/Common/CommonBackground";
import Card from "@/component/Atoms/Card";
import Button from "@/component/Atoms/Button";
import { ButtonWrap, CakeImageWrap, Label, LabelWrap } from "./styles";

import Image from "next/image";
import Cake1 from "@/asset/images/Cake_1.png";
import Cake2 from "@/asset/images/Cake_2.png";
import Cake3 from "@/asset/images/Cake_3.png";
import Cake4 from "@/asset/images/Cake_4.png";

interface Props {
  preAction?: any;
  nextAction?: any;
  id: number;
}

const cakeImages = [Cake1, Cake2, Cake3, Cake4];

function WaitCake({ preAction, nextAction, id }: Props) {
  console.log(id);
  return (
    <CommonBackground onClickAction={preAction}>
      <CakeImageWrap>
        <Image src={cakeImages[id - 1]} alt={`cake-image-${id}`} width={251} height={251} />
      </CakeImageWrap>
      <Card>
        <LabelWrap>
          <Label isGradient={true}>{"케이크는 D-DAY에"}</Label>
          <Label isGradient={false}>{"확인할 수 있어! \n 설레는 마음으로 기다려 줘!✨"}</Label>
          <ButtonWrap>
            <Button label="Change Cake Design" Action={nextAction} />
          </ButtonWrap>
        </LabelWrap>
      </Card>
    </CommonBackground>
  );
}

export default WaitCake;
