import { Background } from "./styles";
import getMessages from "../../../apis/get/getMessages";

interface Props {
  id: number;
}

function CakePage({ id }: Props) {
  const { data } = getMessages(id);

  console.log(data);

  return <Background>this is cake page</Background>;
}

export default CakePage;
