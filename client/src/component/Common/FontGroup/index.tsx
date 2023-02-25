import localFont from "@next/font/local";

const SCDream1 = localFont({ src: "../../../../public/fonts/SCDream1.otf" });
const SCDream3 = localFont({ src: "../../../../public/fonts/SCDream3.otf" });
const Chab = localFont({ src: "../../../../public/fonts/chab.ttf" });
const DNFBit = localFont({ src: "../../../../public/fonts/DNFBitBitTTF.ttf" });
const Aldrich = localFont({ src: "../../../../public/fonts/Aldrich-Regular.ttf" });

function FontGroup() {
  return (
    <style jsx global>{`
      :root {
        /* ... */
        --scdream1-font: ${SCDream1.style.fontFamily};
        --scdream3-font: ${SCDream3.style.fontFamily};
        --chab-font: ${Chab.style.fontFamily};
        --dnfbitbit-font: ${DNFBit.style.fontFamily};
        --aldrich-font: ${Aldrich.style.fontFamily};
      }
    `}</style>
  );
}

export default FontGroup;
