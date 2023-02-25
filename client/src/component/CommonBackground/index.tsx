import Image from "next/image";
import { BackgroundImageWrapper, FillBackground, Inner } from "./styles";

import MainHeart from "@/asset/images/MainHeart.png";
import PrevButton from "@/component/PrevButton";

interface Props {
  children: React.ReactNode;
  previousPageLink?: string;
  onClickAction?: any;
}

function CommonBackground({ children, previousPageLink, onClickAction }: Props) {
  return (
    <FillBackground>
      {previousPageLink && <PrevButton previousPageLink={previousPageLink} />}
      {!!onClickAction && <PrevButton onClickAction={onClickAction} />}
      <BackgroundImageWrapper>
        <Image src={MainHeart} alt={"MainHeart"} width={903} height={1075} />
      </BackgroundImageWrapper>
      <Inner>{children}</Inner>
    </FillBackground>
  );
}

export default CommonBackground;
