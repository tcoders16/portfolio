import { FlipWords } from "../flip-words";

export function FlipWordsDemo() {
const words = [
  "robust",
  "secure",
  "scalable",
  "elegant",
  "efficient",
  "maintainable",
  "reliable",
  "performant",
  "innovative",
  "seamless",
  "impactful",
  "cutting-edge",
  "trusted",
  "future-proof"
];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4 text-white z-99">
      <div className="text-4xl mx-auto font-normal text-neutral-500 flex flex-col ">
        <div>
          Build <FlipWords words={words} className="text-white" />
        </div>
        <div>
          Software with <span className="text-white font-bold">Omkumar Solanki</span>
        </div>
      </div>
    </div>
  );
}