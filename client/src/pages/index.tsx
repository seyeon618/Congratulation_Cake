import Link from "next/link";
import NewButton from "@/component/NewButton";

export default function Home() {
  return (
    <>
      <main>This is Home Page</main>
      <Link href="/create">
        <NewButton text="케이크 생성" />
      </Link>
    </>
  );
}
