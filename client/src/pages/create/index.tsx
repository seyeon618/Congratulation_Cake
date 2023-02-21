import Link from "next/link";

export default function Create() {
  return (
    <>
      <main>This is Create Page</main>
      <form>
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Birthday" />
        <div>케이크 디자인</div>
      </form>

      <li>
        <Link href="/cake">완료!</Link>
      </li>
    </>
  );
}
