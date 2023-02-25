import CelebreateCompleteCake from "@/component/Atoms/PreviewCakes/CelebrateCompleteCake";
import { useState } from "react";
import { useRouter } from "next/router";
import ImageForm from "@/component/Atoms/Forms/ImageForm";
import MessageForm from "@/component/Atoms/Forms/MessageForm";

enum CelebratePageState {
  uploadImage = 0,
  uploadMessage = 1,
  complete = 2,
}

function Celebrate() {
  const router = useRouter();
  const { id } = router.query;

  const [pageState, setPageState] = useState(CelebratePageState.uploadImage);

  const goCakePage = () => {
    router.push(`/cake/${id}`);
  };

  const goNextPage = () => {
    setPageState(pageState + 1);
  };

  const pages = (() => {
    switch (pageState) {
      case CelebratePageState.uploadImage:
      default:
        return <ImageForm preAction={goCakePage} nextAction={goNextPage} />;
      case CelebratePageState.uploadMessage:
        return <MessageForm preAction={goCakePage} nextAction={goNextPage} />;
      case CelebratePageState.complete:
        return <CelebreateCompleteCake />;
    }
  })();

  return <>{pages}</>;
}

export default Celebrate;
