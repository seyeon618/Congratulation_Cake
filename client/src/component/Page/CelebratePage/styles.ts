import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled("div")`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 30px;
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;
