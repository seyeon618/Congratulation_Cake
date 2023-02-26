import CelebreateCompleteCake from "@/component/Atoms/PreviewCakes/CelebrateCompleteCake";
import { useState } from "react";
import { useRouter } from "next/router";
import InputBox from "@/component/Atoms/InputBox";
import ImageForm from "@/component/Atoms/Forms/ImageForm";
import MessageForm from "@/component/Atoms/Forms/MessageForm";
import NameForm from "@/component/Atoms/Forms/NameForm";
import CelebratePage from "@/component/Page/CelebratePage";
import { baseUrl } from "@/constant/api";
import axios from "axios";
import WriterForm from "@/component/Atoms/Forms/WritterForm";

enum CelebratePageState {
  addWriter = 0,
  uploadImage = 1,
  uploadMessage = 2,
  complete = 3,
}

function Celebrate() {
  const router = useRouter();
  const { id } = router.query;
  const cakeId = Number(id);

  const [pageState, setPageState] = useState(CelebratePageState.addWriter);
  const [writer, setWriter] = useState("");
  const [imageFile, setImageFile] = useState<any>(null);
  const [message, setMessage] = useState("");

  const goCakePage = () => {
    router.push(`/cake/${cakeId}`);
  };

  const goNextPageEnter = (e: any) => {
    if (e.key === "Enter") {
      if (pageState === CelebratePageState.addWriter) {
        setWriter(e.target.value);
      }
      setPageState(pageState + 1);
    }
  };

  const goNextPage = () => {
    if (pageState === CelebratePageState.uploadMessage) {
      postCreateMessage();
    } else {
      setPageState(pageState + 1);
    }
  };

  const redirectCelebrate = () => {
    router.push("/celebrate");
  };

  const postCreateMessage = () => {
    const url = `${baseUrl}/message`;

    const formData = new FormData();
    formData.append("writer", writer);
    formData.append("cake_id", cakeId as any);
    formData.append("message", message);
    formData.append("image_file", imageFile);

    axios.post(url, formData).then((res) => {
      setPageState(pageState + 1);
    });
  };

  const pages = (() => {
    switch (pageState) {
      case CelebratePageState.addWriter:
      default:
        return <NameForm preBtnAction={redirectCelebrate} nextAction={goNextPageEnter} text="From." guideText="너의 이름이나 닉네임을 적어줘" />;
      case CelebratePageState.uploadImage:
        return <ImageForm preAction={goCakePage} nextAction={goNextPage} setState={setImageFile} />;
      case CelebratePageState.uploadMessage:
        return <MessageForm preAction={goCakePage} nextAction={goNextPage} setState={setMessage} />;
      case CelebratePageState.complete:
        return <CelebreateCompleteCake cakeId={cakeId} />;
    }
  })();

  return <>{pages}</>;
}

export default Celebrate;
