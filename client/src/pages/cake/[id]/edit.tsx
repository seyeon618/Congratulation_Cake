import { useState } from "react";
import { useRouter } from "next/router";
import PasswordForm from "@/component/Atoms/Forms/PasswordForm";
import CakeForm from "@/component/Atoms/Forms/CakeForm";
import WaitCake from "@/component/Atoms/PreviewCakes/WaitCake";
import CompleteCake from "@/component/Atoms/PreviewCakes/EditCompleteCake";
import axios from "axios";
import { baseUrl } from "@/constant/api";

enum EditPageState {
  password = 0,
  waitCake = 1,
  cakeDesign = 2,
  completeCake = 3,
}

function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const cakeId = Number(id);

  const [pageState, setPageState] = useState(EditPageState.password);

  const passwordConfirm = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();

      //FIXME: password 추가
      const url = `${baseUrl}/cake/${cakeId}/admin?password=${"aaaa1111"}`;

      axios.get(url).then((res) => {
        console.log(res);
        setPageState(pageState + 1);
      });
    }
  };

  const goCakeDesign = () => {
    setPageState(EditPageState.cakeDesign);
  };

  const goCompleteCake = () => {
    setPageState(EditPageState.completeCake);
  };

  const onPrevPage = (e: any) => {
    e.preventDefault();
    setPageState(pageState - 1);
  };

  const goCakePage = () => {
    router.push(`/cake/${id}`);
  };

  const pages = (() => {
    switch (pageState) {
      case EditPageState.password:
      default:
        return <PasswordForm preAction={goCakePage} nextAction={passwordConfirm} text="Type your Password" />;
      case EditPageState.waitCake:
        return <WaitCake preAction={goCakePage} nextAction={goCakeDesign} />;
      case EditPageState.cakeDesign:
        return <CakeForm preAction={onPrevPage} nextAction={goCompleteCake} cakeId={cakeId} />;
      case EditPageState.completeCake:
        return <CompleteCake preAction={goCakePage} />;
    }
  })();

  return <>{pages}</>;
}

export default Edit;
