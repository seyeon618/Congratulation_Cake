import localFont from "@next/font/local";

const SCDream1 = localFont({ src: "../../../public/fonts/SCDream1.otf" });

function FontGroup() {
  return (
    <style jsx global>{`
      :root {
        /* ... */
        --scdream1-font: ${SCDream1.style.fontFamily};
      }
    `}</style>
  );
}

export default FontGroup;
