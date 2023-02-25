import Candle from "@/asset/images/Candle.svg";
import Image from "next/image";
import { Container, ImageWrapper, PictureContainer } from "./styles";

interface Props {
  imageUrl: string;
  location: { top: number; left: number };
  index: number;
}

function Candlelight({ imageUrl, location, index }: Props) {
  const { top, left } = location;
  return (
    <Container topLocation={top} leftLocation={left}>
      <ImageWrapper>
        <PictureContainer>
          <Image src={imageUrl} alt={"candle"} width={100} height={100} />
        </PictureContainer>
        {index < 12 && <Image src={Candle} alt={"candle"} />}
      </ImageWrapper>
    </Container>
  );
}

export default Candlelight;
