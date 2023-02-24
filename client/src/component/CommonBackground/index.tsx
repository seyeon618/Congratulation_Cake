import Image from "next/image";
import { BackgroundImageWrapper, FillBackground, Inner } from "./styles";

import MainHeart from "@/asset/images/MainHeart.png";

interface Props {
  children: React.ReactNode;
}

function CommonBackground({ children }: Props) {
  return (
    <FillBackground>
      {" "}
      <BackgroundImageWrapper>
        <Image src={MainHeart} alt={"MainHeart"} width={903} height={1075} />
      </BackgroundImageWrapper>
      <Inner>{children}</Inner>
    </FillBackground>
  );
}

export default CommonBackground;
