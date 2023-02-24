import { CardContainer } from "./styles";

interface Props {
  children?: React.ReactNode;
}

function Card({ children }: Props) {
  return <CardContainer>{children}</CardContainer>;
}

export default Card;
