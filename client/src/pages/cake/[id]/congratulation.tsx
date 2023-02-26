import { useRouter } from "next/router";
import CakePage from "@/component/Page/CakePage";

function Congratulation() {
  const router = useRouter();
  const { id } = router.query;
  const cakeId = Number(id);

  return <CakePage id={Number(id)} />;
}

export default Congratulation;
