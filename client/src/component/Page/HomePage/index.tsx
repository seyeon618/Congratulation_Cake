import Image from "next/image";
import { Background, BackgroundImageWrapper, Inner } from "./styles";
import MainHeart from "@/asset/images/MainHeart.png";
import Celebrate from "@/asset/images/Celebrate.png";
import Button from "@/component/Atoms/Button";
import LinkText from "@/component/Atoms/LinkText";

function HomePage() {
  return (
    <div>
      <Background>
        <BackgroundImageWrapper>
          <Image src={MainHeart} alt={"MainHeart"} width={903} height={1075} />
        </BackgroundImageWrapper>
        <Inner>
          <Image src={Celebrate} alt={"Celebrate-logo"} width={298} height={217} />

          <Button label="new cake!" link="/create" />

          <LinkText label="I already have a cake" />
        </Inner>
      </Background>
    </div>
  );
}

export default HomePage;
