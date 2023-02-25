import { CakeWrap, CheckWrap } from "./styles";
import Check from "@/asset/images/Check.png";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";

import Cake1 from "@/asset/images/Cake_1.png";
import Cake2 from "@/asset/images/Cake_2.png";
import Cake3 from "@/asset/images/Cake_3.png";
import Cake4 from "@/asset/images/Cake_4.png";

interface Props {
  setSelectedCake?: any;
  selectedCake?: number;
}

function CakeSelector({ selectedCake, setSelectedCake }: Props) {
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
  console.log(selectedCake);

  return (
    <div>
      <CakeWrap>
        <ImageList cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.title}>
              <div
                onClick={() => {
                  setSelectedCake(item.number);
                }}
              >
                <Image src={item.img} alt={item.title} width={120} height={120} />
              </div>
              {item.number === selectedCake ? (
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
