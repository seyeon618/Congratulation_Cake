import { useRef } from "react";
import Image from "next/image";
import { CakeCanvas, Background, DownloadText, Container, ImageWrapper, Title, MessageTitle, MessageList } from "./styles";
import getMessages from "../../../apis/get/getMessages";
import getCake from "@/apis/get/getCake";

import Cake1 from "@/asset/images/Cake_1.png";
import Cake2 from "@/asset/images/Cake_2.png";
import Cake3 from "@/asset/images/Cake_3.png";
import Cake4 from "@/asset/images/Cake_4.png";
import downloadImageBackground from "@/asset/images/download_image_background.png";
import Candlelight from "@/component/Atoms/Candlelight";
import Message from "@/component/Atoms/Message";

import html2canvas from "html2canvas";

interface Props {
  id: number;
}

const locationData = [
  [
    { top: 100, left: -170 },
    { top: -80, left: -110 },
    { top: -330, left: -35 },
    { top: -480, left: 35 },
    { top: -720, left: 90 },
    { top: -870, left: 170 },
    { top: -1010, left: -170 },
    { top: -1180, left: -95 },
    { top: -1430, left: -30 },
    { top: -1580, left: 30 },
    { top: -1818, left: 100 },
    { top: -1980, left: 170 },
    { top: -2130, left: -45 },
    { top: -2330, left: 90 },
    { top: -2480, left: 10 },
  ],
  [
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
  ],
  [
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
  ],
  [
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
    { top: 150, left: 80 },
  ],
];

function CakePage({ id }: Props) {
  const { data: cakeData } = getCake(id);
  const { data: messageData } = getMessages(id);

  const cakeRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = async () => {
    const element = cakeRef.current;

    if (!element) return;

    const canvas = await html2canvas(element, { backgroundColor: "#9195ed", height: 899 });

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const cakeImages = [Cake1, Cake2, Cake3, Cake4];

  return (
    <Background>
      <Container>
        <Title>Congratulation</Title>
        <CakeCanvas ref={cakeRef}>
          <ImageWrapper>
            <Image src={cakeImages[0]} alt={`cake`} />
          </ImageWrapper>
          {messageData &&
            messageData.map((message, index) => (
              <div key={`cake-${id}-candle-${message?.id}`}>
                <Candlelight imageUrl={message?.image_url} location={locationData[0][index]} index={index} />
              </div>
            ))}
        </CakeCanvas>

        <MessageList>
          <DownloadText onClick={handleDownloadImage}>DownLoad</DownloadText>
          <MessageTitle>ROLLING PAPER FOR YOU</MessageTitle>
          {messageData &&
            messageData.map((message, index) => (
              <div key={`cake-${id}-message-${message?.id}`}>
                <Message messageData={message} />
              </div>
            ))}
        </MessageList>
      </Container>
    </Background>
  );
}

export default CakePage;
