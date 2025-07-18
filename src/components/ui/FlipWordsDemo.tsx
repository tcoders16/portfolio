import { FlipWords } from "../flip-words";

export function FlipWordsDemo() {
  const words = [
    "robust", "secure", "agentic", "composable", "self-healing",
    "fault-tolerant", "declarative", "immutable", "frictionless", "traceable",
    "testable", "hypermodern", "accessible", "idempotent", "predictive",
    "sovereign", "typed", "ephemeral", "polyglot", "autopoietic",
    "scalable", "elegant", "efficient", "maintainable", "reliable",
    "performant", "innovative", "seamless", "impactful", "cutting-edge",
    "trusted", "future-proof"
  ];

  return (
    <div className="h-screen flex items-center justify-center px-4 text-white z-50">
      <div className="flex flex-col leading-snug text-left gap-y-4 relative">

        {/* Line 1 */}
        <div className="text-4xl font-semibold text-neutral-500">
          Build <FlipWords words={words} className="text-white inline" />
        </div>

        {/* Line 2: AI - Agentic */}
{/* Line 2: AI - Agentic with nose and smile */}
<div className="relative inline-block self-start mt-2">
  <div className="text-6xl font-pixel text-white mb-8">
    AI - Agentic
  </div>

  {/* Nose */}
  <div className="text-5xl font-pixel text-white absolute left-1/2 transform -translate-x-1/2 top-full mt-4">
    |
  </div>

  {/* Smile SVG */}
  <span
    className="absolute left-1/2 transform -translate-x-1/2 w-[400px] h-[45px] bottom-[-110px] z-[-1]"
    style={{
      backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1283 132'><path d='M1282.46 5.79c-.91-3.88-5.18-6.65-9.04-5.54-104.37 29.02-193.78 56.87-361.6 74.53-268.41 28.16-539.6 14.6-803.08-26.38C94.9 47.97-.34 26.24.08 41.38c-1.56 14.21 19.47 12.91 29.6 17.24 32.82 8.6 66.1 15.33 99.4 21.81 238.99 44.43 482.98 55.29 725.63 49.01 92.37-4.11 185.68-9.96 275.51-33.09 18.68-6.31 42.79-9.21 55.18-25.89 6.76-13.28-12.41-21.16-13.83-6.12-17.69 11.67-39.31 15.61-59.45 21.34-114.56 25.18-245.31 30.46-361.99 30.36-191.39.45-383.13-10.13-572-42.21 277.31 36.42 560.77 44.96 837.82 2.23 104.21-15.4 195.11-42.74 260.97-61.22a7.57 7.57 0 0 0 5.54-9.05Z' fill='%23FFFFFF'/> </svg>")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
    }}
  />
</div>

        {/* Line 3: Signature */}
        <div className="text-5xl font-bold text-neutral-500 mt-30">
          <span>Software with </span>
          <span className="text-white font-bold ">Omkumar Solanki</span>
        </div>
      </div>
    </div>
  );
}