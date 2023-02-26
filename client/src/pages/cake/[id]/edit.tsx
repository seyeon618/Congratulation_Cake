import { useState } from "react";
import { useRouter } from "next/router";
import PasswordForm from "@/component/Atoms/Forms/PasswordForm";
import CakeForm from "@/component/Atoms/Forms/CakeForm";
import WaitCake from "@/component/Atoms/PreviewCakes/WaitCake";
import CompleteCake from "@/component/Atoms/PreviewCakes/EditCompleteCake";
import axios from "axios";
import { baseUrl } from "@/constant/api";
import getCake from "@/apis/get/getCake";

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
  const { data, isLoading } = getCake(cakeId);

  const [pageState, setPageState] = useState(EditPageState.password);
  const [selectedCake, setSelectedCake] = useState(data?.cake_design_id || 0);

  const passwordConfirm = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const url = `${baseUrl}/cake/${cakeId}/admin?password=${e.target.value}`;

      axios
        .get(url)
        .then((res) => {
          setPageState(pageState + 1);
        })
        .catch((err) => {
          alert("Password is wrong!");
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
        return <PasswordForm preAction={goCakePage} nextAction={passwordConfirm} text="Type your Password" showGuideMessage={false} />;
      case EditPageState.waitCake:
        return <WaitCake preAction={goCakePage} nextAction={goCakeDesign} id={cakeId} selectedCake={selectedCake} />;
      case EditPageState.cakeDesign:
        return <CakeForm preAction={onPrevPage} nextAction={goCompleteCake} selectedCake={selectedCake} setSelectedCake={setSelectedCake} cakeId={cakeId} />;
      case EditPageState.completeCake:
        return <CompleteCake selectedCake={selectedCake} cakeId={cakeId} />;
    }
  })();

  return <>{pages}</>;
}

export default Edit;
