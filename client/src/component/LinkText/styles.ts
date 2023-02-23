import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  margin-top: 20px;
`;

export const Text = styled("div")`
  text-decoration-line: none;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.common.white};

  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
