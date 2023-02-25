import CommonBackground from "@/component/CommonBackground";
import { useRouter } from "next/router";

function Edit() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <CommonBackground previousPageLink={`/cake/${id}`}>
      <h1>CELEBRATE PAGE</h1>
    </CommonBackground>
  );
}

export default Edit;
