import { useRouter } from "next/router";
import { StyledButton } from "./styles";

interface Props {
  label: string;
  link?: string;
  Action?: any;
  disable?: boolean;
}

function Button({ label, link, Action, disable }: Props) {
  const router = useRouter();
  if (disable) {
    return (
      <StyledButton disabled onClick={Action} variant="contained">
        {label}
      </StyledButton>
    );
  } else {
    if (link) {
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

    if (Action) {
      return (
        <StyledButton onClick={Action} variant="contained">
          {label}
        </StyledButton>
      );
    }
  }

  return <></>;
}

export default Button;
