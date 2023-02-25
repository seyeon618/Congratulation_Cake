import { ButtonWrapper } from "./styles";
import Image from "next/image";
import PrevBtn from "@/asset/images/PrevBtn.png";
import { useRouter } from "next/router";

interface Props {
  previousPageLink?: string;
  onClickAction?: any;
}

function PrevButton({ previousPageLink, onClickAction }: Props) {
  const router = useRouter();

  if (previousPageLink) {
    return (
      <>
        <ButtonWrapper
          onClick={() => {
            router.push(previousPageLink);
          }}
        >
          <Image src={PrevBtn} alt={"previous-button"} />
        </ButtonWrapper>
      </>
    );
  }

  if (onClickAction) {
    return (
      <>
        <ButtonWrapper onClick={onClickAction}>
          <Image src={PrevBtn} alt={"previous-button"} />
        </ButtonWrapper>
      </>
    );
  }

  return <></>;
}

export default PrevButton;
