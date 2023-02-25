import { styled } from "@mui/material/styles";
import { FormLabel, TextField } from "@mui/material";

export const StyledInput = styled(TextField)`
  .mui-style-1rwuzie-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 2px solid purple;
  }

  .mui-style-7ati4b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: purple;
  }
`;

export const StyledInputWrap = styled("div")`
  margin-top: 30%;
  display: flex;
  position: relative;
  justify-content: center;
`;

export const StyledLabel = styled(FormLabel)`
  position: absolute;
  margin-top: 15%;
  font-size: 0.5rem;
  color: #8511ee;
`;

export const Question = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20%;
`;
