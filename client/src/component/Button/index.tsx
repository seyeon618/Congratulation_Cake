import { useRouter } from "next/router";
import { StyledButton } from "./styles";

interface Props {
  label: string;
  link?: string;
}

function Button({ label, link }: Props) {
  const router = useRouter();
  return (
    <StyledButton
      onClick={() => {
        router.push(link as string);
      }}
      variant="contained"
    >
      {label}
    </StyledButton>
  );
}

export default Button;
