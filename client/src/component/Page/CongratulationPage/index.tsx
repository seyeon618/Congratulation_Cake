import CongratulationText from "@/asset/images/congratulation_text.png";
import Card from "@/component/Atoms/Card";
import Button from "@/component/Atoms/Button";
import { MakeButtonWrap, Container, ImageWrap } from "./styles";
import { useRouter } from "next/router";

import Image from "next/image";
import Cake1 from "@/asset/images/Cake_1.png";
import Cake2 from "@/asset/images/Cake_2.png";
import Cake3 from "@/asset/images/Cake_3.png";
import Cake4 from "@/asset/images/Cake_4.png";
import getCake from "@/apis/get/getCake";

interface Props {
  cakeId: number;
}

const cakeImages = [Cake1, Cake2, Cake3, Cake4];

function CongratulationPage({ cakeId }: Props) {
  const router = useRouter();

  const { data } = getCake(cakeId);

  const goCongratulationPage = () => {
    router.push(`/cake/${cakeId}/congratulation`);
  };

  return (
    <Container>
      <Image src={CongratulationText} width={319} height={54} alt="celebrate_text" />
      <ImageWrap>{data && <Image src={cakeImages[data.cake_design_id - 1]} alt={`cake-image-${cakeId}`} width={355} height={355} />}</ImageWrap>
      <Card></Card>
      <MakeButtonWrap>
        <Button label="Open Cake" Action={goCongratulationPage} />
      </MakeButtonWrap>
    </Container>
  );
}

export default CongratulationPage;
