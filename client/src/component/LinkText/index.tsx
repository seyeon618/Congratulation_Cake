import { useRouter } from "next/router";
import { Container, Text } from "./styles";

interface Props {
  label: string;
}

function LinkText({ label }: Props) {
  const router = useRouter();

  return (
    <Container>
      <Text
        onClick={() => {
          router.push("/cake");
        }}
      >
        {label}
      </Text>
    </Container>
  );
}

export default LinkText;
