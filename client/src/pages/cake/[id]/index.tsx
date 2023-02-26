import getCake from "@/apis/get/getCake";
import CommonBackground from "@/component/Common/CommonBackground";

import { useRouter } from "next/router";

import CelebratePage from "@/component/Page/CelebratePage";
import CongratulationPage from "@/component/Page/CongratulationPage";

function Cake() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = getCake(Number(id));

  // const data = {
  //   id: 2,
  //   receiver: "한승웅",
  //   date_of_birth: "2023-02-13",
  //   cake_design_id: 1,
  //   link: null,
  // };

  const isBeforeBirthday = new Date(data?.date_of_birth as string) > new Date();

  return <CommonBackground>{isBeforeBirthday ? <CelebratePage cakeId={data?.id} /> : <CongratulationPage cakeId={data?.id} />}</CommonBackground>;
}

export default Cake;
