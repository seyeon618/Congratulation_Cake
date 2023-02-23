import { Inner, MainContainer } from "./styles";

interface Props {
  children: React.ReactNode;
}

function MainBlock({ children }: Props) {
  return (
    <MainContainer>
      <Inner>{children}</Inner>
    </MainContainer>
  );
}

export default MainBlock;
