import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledInput = styled(TextField)`
  .mui-style-1rwuzie-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 2px solid purple;
  }

  .mui-style-7ati4b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: purple;
  }
`;

export const StyledInputWrap = styled("div")`
  top: 20%;
  display: flex;
  position: relative;
  justify-content: center;
`;
