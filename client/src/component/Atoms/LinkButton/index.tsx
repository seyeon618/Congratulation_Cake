import { useRouter } from "next/router";
import { StyledButton } from "./styles";
import Image from "next/image";
import PrevBtn from "@/asset/images/PrevBtn.png";

interface Props {
  link?: string;
}

function LinkButton({ link }: Props) {
  const router = useRouter();
  return (
    <StyledButton
      onClick={() => {
        router.push(link as string);
      }}
      variant="contained"
    >
      <Image src={PrevBtn} alt={"Previous-button"} />
    </StyledButton>
  );
}

export default LinkButton;
