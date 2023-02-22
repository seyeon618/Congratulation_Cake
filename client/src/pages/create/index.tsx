import Link from "next/link";
import { useState } from "react";

export default function Create() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const handleInputPw = (password: string) => {
    // password regular expression
    const pwRegEx = /^[0-9]+$/;

    if (password.match(pwRegEx) === null) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const handleNavigateToCake = (e: React.FormEvent<HTMLInputElement>) => {
    if (!isPassword) {
      e.preventDefault();
      alert("비밀번호는 숫자로만 이루어져야 합니다.");
    }
  };

  return (
    <>
      <main>This is Create Page</main>
      <form>
        <input type="text" placeholder="To" />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            handleInputPw(e.target.value);
          }}
        />
        <input type="text" placeholder="Birthday" />
        <div>케이크 디자인</div>

        <li> cake design1 </li>

        <Link href="/cake" onClick={() => handleNavigateToCake}>
          <button>Next</button>
        </Link>
      </form>
    </>
  );
}
