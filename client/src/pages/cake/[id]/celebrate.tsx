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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const goCakePage = () => {
    router.push(`/cake/${cakeId}`);
  };

  const goNextPage = () => {
    setPageState(pageState + 1);
  };

  const redirectCelebrate = () => {
    router.push("/celebrate");
  };

  const postCreateMessage = () => {
    const url = `${baseUrl}/message`;

    const requestData = {
      writer: "name",
      cake_id: cakeId,
      message: "집에 가고싶어....ㅠㅠ",
      image_file: "",
    };

    axios.post(url, requestData).then((res) => {
      console.log(res);
    });
  };

  const pages = (() => {
    switch (pageState) {
      case CelebratePageState.addWriter:
      default:
        return (
          <NameForm preBtnAction={redirectCelebrate}>
            <InputBox onKeyPress={goNextPage} text="From." guideText="너의 이름이나 닉네임을 적어줘"></InputBox>
          </NameForm>
        );
      case CelebratePageState.uploadImage:
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
