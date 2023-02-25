import { useState } from "react";
import { Label } from "./styles";
import InputBox from "@/component/Atoms/InputBox";
import Calender from "@/component/Atoms/Calendar";

import NameForm from "@/component/Atoms/Forms/NameForm";
import DateForm from "@/component/Atoms/Forms/DateForm";
import PasswordForm from "@/component/Atoms/Forms/PasswordForm";
import CakeForm from "@/component/Atoms/Forms/CakeForm";
import { useRouter } from "next/router";

function CakePage() {
  const router = useRouter();
  enum PageState {
    nickname = 0,
    birthday = 1,
    password = 2,
    cake = 3,
    success = 4,
  }
  const [pageState, setPageState] = useState(PageState.nickname);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        return <CakeForm preAction={onPrevPage}></CakeForm>;
    }
  })();

  return <>{forms}</>;
}

export default CakePage;
