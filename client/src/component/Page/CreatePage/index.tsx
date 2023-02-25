import { useState } from "react";
import { Label } from "./styles";
import InputBox from "@/component/Atoms/InputBox";
import Calender from "@/component/Atoms/Calendar";

import NameForm from "@/component/Atoms/Forms/NameForm";
import DateForm from "@/component/Atoms/Forms/DateForm";
import PasswordForm from "@/component/Atoms/Forms/PasswordForm";
import CakeForm from "@/component/Atoms/Forms/CakeForm";
import CompleteCake from "@/component/Atoms/Forms/CompleteForm";

import { useRouter } from "next/router";

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
  const [selectedCake, setSelectedCake] = useState(0);

  const onNextPageToSelection = () => {
    setPageState(pageState + 1);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onNextPage = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
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

  const forms = (() => {
    switch (pageState) {
      case PageState.nickname:
      default:
        return (
          <NameForm preBtnAction={redirectHome}>
            <Label>{"your name or nickname?"}</Label>
            <InputBox onKeyPress={onNextPage}></InputBox>
          </NameForm>
        );
      case PageState.birthday:
        return (
          <DateForm preBtnAction={onPrevPage}>
            <Label>{"which day do you want to celebrate?"}</Label>
            <Calender onClose={onNextPageToSelection}></Calender>
          </DateForm>
        );
      case PageState.password:
        return <PasswordForm preAction={onPrevPage} nextAction={onNextPage} text="Set a Password!" />;
      case PageState.cake:
        return <CakeForm preAction={onPrevPage} nextAction={onNextPageToSelection} setSelectedCake={setSelectedCake} selectedCake={selectedCake}></CakeForm>;
      case PageState.success:
        return <CompleteCake selectedCake={selectedCake} />;
    }
  })();

  return <>{forms}</>;
}

export default CakePage;
