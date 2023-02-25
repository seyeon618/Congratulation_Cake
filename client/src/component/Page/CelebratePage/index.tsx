import Image from "next/image";
import Button from "@/component/Atoms/Button";
import { ButtonWrap, Celebrate, Background, BackgroundImageWrapper, Inner } from "./styles";
import MainHeart from "@/asset/images/MainHeart.png";
import Star from "@/asset/images/Star.png";
import HomeCake_Main from "@/asset/images/MainCake.png";
import HomeCake_1 from "@/asset/images/HomeCake_1.png";
import HomeCake_2 from "@/asset/images/HomeCake_2.png";

interface Props {
  cakeId: number;
}

function CelebratePage({ cakeId }: Props) {
  return (
    <div>
      <Background>
        <BackgroundImageWrapper>
          <Image src={MainHeart} alt={"MainHeart"} width={903} height={1075} />
          <Image id="cake_main" src={HomeCake_Main} alt="MainCake" />
          <Image id="cake_1" src={HomeCake_1} alt={"cake1"} />
          <Image id="cake_2" src={HomeCake_2} alt={"cake2"} />
        </BackgroundImageWrapper>
        <Inner>
          <Celebrate>Celebrate</Celebrate>
          <Image src={Star} alt={"Star"} />
          <ButtonWrap>
            <Button label="Change Cake" link={`/cake/${cakeId}/edit`} />
            <Button label="Go to Celebrate" link={`/cake/${cakeId}/celebrate`} />
          </ButtonWrap>
        </Inner>
      </Background>
    </div>
  );
}

export default CelebratePage;
