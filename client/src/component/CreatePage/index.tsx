import { useState } from "react";
import { Label } from "./styles";
import InputBox from "@/component/InputBox";
import InputPw from "@/component/InputPw";
import Calender from "@/component/Calendar";
import CakeSelector from "@/component/CakeSelector";
import NameForm from "@/component/CreateForms/NameForm";
import DateForm from "@/component/CreateForms/DateForm";
import PasswordForm from "@/component/CreateForms/PasswordForm";
import CakeForm from "@/component/CreateForms/CakeForm";
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
        return (
          <PasswordForm preBtnAction={onPrevPage}>
            <Label>{"Set a password!"}</Label>
            <InputPw onKeyPress={onNextPage}></InputPw>
          </PasswordForm>
        );
      case PageState.cake:
        return (
          <CakeForm preBtnAction={onPrevPage}>
            <Label>{"Pick a cake design"}</Label>
            <CakeSelector />
          </CakeForm>
        );
    }
  })();

  return <>{forms}</>;
}

export default CakePage;
