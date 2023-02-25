import { CakeWrap, CheckWrap } from "./styles";
import Cake1 from "@/asset/images/Cake_1.png";
import Cake2 from "@/asset/images/Cake_2.png";
import Cake3 from "@/asset/images/Cake_3.png";
import Cake4 from "@/asset/images/Cake_4.png";
import Check from "@/asset/images/Check.png";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";

function CakeSelector() {
  const [curCake, setCurCake] = useState(0);
  const itemData = [
    {
      img: Cake1,
      number: 1,
      title: "Cake1",
    },
    {
      img: Cake2,
      number: 2,
      title: "Cake2",
    },
    {
      img: Cake3,
      number: 3,
      title: "Cake3",
    },
    {
      img: Cake4,
      number: 4,
      title: "Cake4",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCakeSelection = (num: number, e: any) => {
    e.preventDefault();
    setCurCake(num);
  };

  return (
    <div>
      <CakeWrap>
        <ImageList cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.title}>
              <div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={120}
                  height={120}
                  onClick={(e) => {
                    onCakeSelection(item.number, e);
                  }}
                />
              </div>
              {item.number === curCake ? (
                <CheckWrap>
                  <Image src={Check} alt="Check" />
                </CheckWrap>
              ) : (
                <div />
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </CakeWrap>
    </div>
  );
}

export default CakeSelector;
