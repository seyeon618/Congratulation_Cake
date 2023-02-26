import { Bang, Box, BoxWrap, TextWrap, StyledInput, InputWrap, Label } from "./styles";
import Image from "next/image";
import BangImg from "@/asset/images/Bang.png";
import { useLayoutEffect, useRef, useState } from "react";
import { isFunctionLike } from "typescript";

interface Props {
  onKeyPress: (e: any) => void;
  showGuideMessage?: boolean;
  password: string;
  setPassword?: any;
}

function InputPw({ onKeyPress, showGuideMessage, password, setPassword }: Props) {
  const input = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (input.current !== null) input.current.focus();
  }, []);

  return (
    <div>
      <BoxWrap>
        <Box>
          <TextWrap isVisible={password.length >= 1}>*</TextWrap>
        </Box>
        <Box>
          <TextWrap isVisible={password.length >= 2}>*</TextWrap>
        </Box>
        <Box>
          <TextWrap isVisible={password.length >= 3}>*</TextWrap>
        </Box>
        <Box>
          <TextWrap isVisible={password.length >= 4}>*</TextWrap>
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
              setPassword(e.target.value);
            }}
            onKeyPress={onKeyPress}
            autoFocus
            value={password}
          />
        </form>
      </InputWrap>
    </div>
  );
}

export default InputPw;
