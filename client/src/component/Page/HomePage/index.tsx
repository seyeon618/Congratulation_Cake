import Image from "next/image";
import { ButtonWrap, Celebrate, Background, BackgroundImageWrapper, Inner } from "./styles";
import MainHeart from "@/asset/images/MainHeart.png";
import Star from "@/asset/images/Star.png";
import HomeCake_Main from "@/asset/images/MainCake.png";
import HomeCake_1 from "@/asset/images/HomeCake_1.png";
import HomeCake_2 from "@/asset/images/HomeCake_2.png";
import Button from "@/component/Atoms/Button";

function HomePage() {
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
            <Button label="New Cake!" link="/create" />
          </ButtonWrap>
        </Inner>
      </Background>
    </div>
  );
}

export default HomePage;
