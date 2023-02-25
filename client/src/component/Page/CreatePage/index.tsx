import { useState } from "react";
import InputBox from "@/component/Atoms/InputBox";
import Calender from "@/component/Atoms/Calendar";

import NameForm from "@/component/Atoms/Forms/NameForm";
import DateForm from "@/component/Atoms/Forms/DateForm";
import PasswordForm from "@/component/Atoms/Forms/PasswordForm";
import CakeForm from "@/component/Atoms/Forms/CakeForm";
import CompleteCake from "@/component/Atoms/Forms/CompleteForm";

import { baseUrl } from "@/constant/api";

import { useRouter } from "next/router";
import axios from "axios";

enum PageState {
  nickname = 0,
  birthday = 1,
  password = 2,
  cake = 3,
  success = 4,
}

function CakePage() {
  const router = useRouter();

  const [pageState, setPageState] = useState(PageState.nickname);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [selectedCake, setSelectedCake] = useState(0);
  const [cakeLink, setCakeLink] = useState("");

  const onNextPageToSelection = () => {
    setPageState(pageState + 1);
    if (pageState === PageState.cake) {
      postCreateCake();
    }
  };

  const onNextPage = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (pageState === PageState.nickname) {
        setName(e.target.value);
      } else if (pageState === PageState.password) {
        setPassword(e.target.value);
      }

      setPageState(pageState + 1);
    }
  };

  const onPrevPage = (e: any) => {
    e.preventDefault();
    setPageState(pageState - 1);
  };

  const redirectHome = () => {
    router.push("/");
  };

  const postCreateCake = () => {
    const url = `${baseUrl}/cake`;
    const requestData = {
      receiver: name,
      password: password,
      date_of_birth: birthday,
      cake_design_id: selectedCake,
    };
    // const requestData = {
    //   receiver: "name",
    //   password: "password",
    //   date_of_birth: "2023-02-02",
    //   cake_design_id: 1,
    // };

    axios.post(url, requestData).then((res) => {
      setCakeLink(res.data.link);
    });
  };

  const forms = (() => {
    switch (pageState) {
      case PageState.nickname:
      default:
        return <NameForm preBtnAction={redirectHome} nextAction={onNextPage} text="To." guideText="케이크 주인의 이름을 적어줘" />;
      case PageState.birthday:
        return (
          <DateForm preBtnAction={onPrevPage}>
            <Calender onClose={onNextPageToSelection} setState={setBirthday}></Calender>
          </DateForm>
        );
      case PageState.password:
        return <PasswordForm preAction={onPrevPage} nextAction={onNextPage} text={"Set a \n Password!"} showGuideMessage={true} />;
      case PageState.cake:
        return <CakeForm preAction={onPrevPage} nextAction={onNextPageToSelection} setSelectedCake={setSelectedCake} selectedCake={selectedCake}></CakeForm>;
      case PageState.success:
        return <CompleteCake selectedCake={selectedCake} cakeLink={cakeLink} />;
    }
  })();

  return <>{forms}</>;
}

export default CakePage;
