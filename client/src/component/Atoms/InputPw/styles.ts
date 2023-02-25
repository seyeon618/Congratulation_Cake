import { styled } from "@mui/material/styles";
import { FormLabel, TextField } from "@mui/material";

export const Bang = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 30%;
`;

export const Label = styled(FormLabel)`
  position: absolute;
  margin-top: 15%;
  font-size: 0.5rem;
  color: #8511ee;
`;

export const InputWrap = styled("div")`
  margin-top: 20%;
  display: flex;
  position: relative;
  justify-content: center;
`;

export const Input = styled(TextField)`
  .mui-style-1rwuzie-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 2px solid purple;
  }

  .mui-style-7ati4b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: purple;
  }
`;
