import Image from "next/image";
import congratulationText from "@/asset/images/congratulation_text.png";
import Card from "@/component/Atoms/Card";
import Button from "@/component/Atoms/Button";
import { Container, Inner, ButtonsWrapper } from "./styles";
import { useRouter } from "next/router";

interface Props {
  cakeId?: number;
}

function CongratulationPage({ cakeId }: Props) {
  const router = useRouter();

  const goCongratulationPage = () => {
    router.push(`/cake/${cakeId}/congratulation`);
  };

  return (
    <Container>
      <Image src={congratulationText} width={319} height={54} alt="celebrate_text" />
      <Card>
        <Inner>
          <div>케이크 이미지</div>
        </Inner>
      </Card>
      <Button label="촛불 끄기" Action={goCongratulationPage} />
    </Container>
  );
}

export default CongratulationPage;
