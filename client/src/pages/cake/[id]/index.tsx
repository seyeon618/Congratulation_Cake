import getCake from "@/apis/get/getCake";
import { useRouter } from "next/router";

function Cake() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = getCake(id as string);

  return (
    <>
      <div>id: {data?.id}</div>
      <div>receiver: {data?.receiver}</div>
      <div>date_of_birth: {data?.date_of_birth}</div>
      <div>cake_design_id: {data?.cake_design_id}</div>
    </>
  );
}

export default Cake;
