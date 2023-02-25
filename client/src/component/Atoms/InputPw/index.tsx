import { Bang, Input, InputWrap, Label } from "./styles";
import Image from "next/image";
import BangImg from "@/asset/images/Bang.png";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onKeyPress: (e: any) => void;
}

function InputPw({ onKeyPress }: Props) {
  return (
    <div>
      <Bang>
        <Image src={BangImg} alt={"bang"} />
        <Label>{"비밀번호는 잊고 나면 찾거나 수정하기 어려우니 신중히 작성해줘!"}</Label>
      </Bang>
      <InputWrap>
        <form>
          <Input variant="standard" type="password" onKeyPress={onKeyPress} />
        </form>
      </InputWrap>
    </div>
  );
}

export default InputPw;
