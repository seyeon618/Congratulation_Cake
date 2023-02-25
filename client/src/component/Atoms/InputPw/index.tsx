import { Bang, Box, BoxWrap, TextWrap, StyledInput, InputWrap, Label } from "./styles";
import Image from "next/image";
import BangImg from "@/asset/images/Bang.png";
import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  onKeyPress: (e: any) => void;
  showGuideMessage?: boolean;
}

function InputPw({ onKeyPress, showGuideMessage }: Props) {
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  useLayoutEffect(() => {
    if (input.current !== null) input.current.focus();
  }, []);

  return (
    <div>
      <BoxWrap>
        <Box>
          <TextWrap isVisible={value.length >= 1}>*</TextWrap>
        </Box>
        <Box>
          <TextWrap isVisible={value.length >= 2}>*</TextWrap>
        </Box>
        <Box>
          <TextWrap isVisible={value.length >= 3}>*</TextWrap>
        </Box>
        <Box>
          <TextWrap isVisible={value.length >= 4}>*</TextWrap>
        </Box>
      </BoxWrap>
      <Bang isShow={showGuideMessage ? true : false}>
        <Image src={BangImg} alt={"bang"} />
        <Label>{"비밀번호는 잊고 나면 찾거나 수정하기 어려우니 신중히 작성해줘!"}</Label>
      </Bang>
      <InputWrap>
        <form>
          <StyledInput
            type="number"
            ref={input}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyPress={onKeyPress}
            autoFocus
          />
        </form>
      </InputWrap>
    </div>
  );
}

export default InputPw;
