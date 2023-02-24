import Image from "next/image";
import celebrateText from "@/asset/images/celebrate_text.png";
import Card from "@/component/Card";
import Button from "@/component/Button";
import { Container, Inner, ButtonsWrapper } from "./styles";

interface Props {
  cakeId: string;
}

function CelebratePage({ cakeId }: Props) {
  return (
    <Container>
      <Image src={celebrateText} width={258} height={39} alt="celebrate_text" />
      <Card>
        <Inner>
          <div>케이크 이미지</div>
          <ButtonsWrapper>
            <Button label="Edit" link={`/cake/${cakeId}/edit`} />
            <Button label="Celebrate" link={`/cake/${cakeId}/celebrate`} />
          </ButtonsWrapper>
        </Inner>
      </Card>
    </Container>
  );
}

export default CelebratePage;
