import { useRouter } from "next/router";
import CakePage from "@/component/Page/CakePage";

function Congratulation() {
  const router = useRouter();
  const { id } = router.query;

  return <CakePage />;
}

export default Congratulation;
