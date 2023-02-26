import getCake from "@/apis/get/getCake";
import CommonBackground from "@/component/Common/CommonBackground";

import { useRouter } from "next/router";

import CelebratePage from "@/component/Page/CelebratePage";
import CongratulationPage from "@/component/Page/CongratulationPage";

function Cake() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = getCake(Number(id));

  const isBeforeBirthday = new Date(data?.date_of_birth as string) > new Date();

  return <CommonBackground>{isBeforeBirthday ? <CelebratePage cakeId={data?.id} /> : <CongratulationPage cakeId={Number(id)} />}</CommonBackground>;
}

export default Cake;
