import getCake from "@/apis/get/getCake";
import CommonBackground from "@/component/CommonBackground";

import { useRouter } from "next/router";

import CelebratePage from "@/component/CelebratePage";

function Cake() {
  const router = useRouter();
  const { id } = router.query;
  // const { data } = getCake(id as string);
  // FIXME : Remove mock data
  const data = {
    id: "2",
    receiver: "한승웅",
    date_of_birth: "2023-02-13",
    cake_design_id: 1,
    link: null,
  };

  const isBeforeBirthday = new Date(data?.date_of_birth) < new Date();

  return <CommonBackground>{isBeforeBirthday ? <CelebratePage cakeId={data?.id} /> : <div>생일을 축하합니다!</div>}</CommonBackground>;
}

export default Cake;
