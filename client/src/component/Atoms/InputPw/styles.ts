import { styled } from "@mui/material/styles";
import { FormLabel } from "@mui/material";

export const Bang = styled("div")`
  position: relative;
  justify-content: center;
  margin-top: 20%;

  display: ${(props: { isShow: boolean }) => (props.isShow ? "flex" : "none")};
`;

export const Label = styled(FormLabel)`
  position: absolute;
  margin-top: 15%;
  font-size: 0.5rem;
  color: #8511ee;
`;

export const InputWrap = styled("div")`
  margin-top: 30%;
  display: flex;
  position: relative;
  justify-content: center;
`;

export const BoxWrap = styled("div")`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 30%;
  padding: 0px 10px 0px 10px;
  gap: 10px;
`;

export const Box = styled("div")`
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid purple;
  border-radius: 10px;
`;

export const StyledInput = styled("input")`
  border: 0px;
  background: none;
  color: transparent;

  :focus {
    outline: none;
  }
`;

export const TextWrap = styled("div")`
  width: 100%;
  position: relative;
  justify-content: center;
  color: purple;
  font-size: xxx-large;

  display: ${(props: { isVisible: boolean }) => (props.isVisible ? "flex" : "none")};
`;
