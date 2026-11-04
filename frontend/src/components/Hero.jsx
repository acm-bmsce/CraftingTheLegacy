import { MousePointer2, PenTool } from "lucide-react";
import { eventConfig } from "../config";

function ShapeComposition() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto aspect-square w-full max-w-[330px] sm:max-w-[400px]"
    >
      <div className="absolute right-0 top-0 grid size-[58%] place-items-center rounded-full border-4 border-black bg-blue-600 shadow-[8px_8px_0_#000]">
        <span className="font-display text-[clamp(4.5rem,13vw,7.5rem)] leading-none text-yellow-400">
          80
        </span>
        <span className="absolute bottom-[16%] border-2 border-black bg-white px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-[0.24em] text-black">
          Years
        </span>
      </div>

      <div className="absolute left-0 top-[10%] -rotate-6 border-4 border-black bg-white px-3 py-2 shadow-[5px_5px_0_#000]">
        <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-black/55">
          EST. 1946
        </p>
        <p className="font-display text-xl leading-none text-black">
          BMS<span className="text-blue-600">CE</span>
        </p>
      </div>

      <div className="absolute bottom-[6%] left-0 w-[62%] drop-shadow-[8px_8px_0_#000]">
        <div className="bg-black p-2 [clip-path:polygon(50%_0,100%_100%,0_100%)]">
          <div className="aspect-[1/0.88] bg-yellow-400 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        </div>
      </div>

      <div className="absolute bottom-[3%] right-[1%] h-[25%] w-[38%] rotate-6 border-4 border-black bg-white p-2 shadow-[6px_6px_0_#000]">
        <div className="stripe-band h-full w-full border-2 border-black" />
      </div>

      <div className="absolute right-[6%] top-[53%] grid size-14 rotate-3 place-items-center border-4 border-black bg-yellow-400 shadow-[4px_4px_0_#000]">
        <PenTool className="size-6 text-black" strokeWidth={2.8} />
      </div>

      <MousePointer2
        className="absolute left-[54%] top-[2%] size-10 rotate-6 fill-white stroke-black"
        strokeWidth={2.4}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-4 border-black grid-paper"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-8 lg:px-8 lg:py-20">
        <div className="min-w-0">
          <h1 className="font-display uppercase leading-[0.82] tracking-[-0.04em]">
            <span className="block">
              <span className="inline-block whitespace-nowrap border-4 border-black bg-white px-3 py-2 text-[clamp(2.6rem,8vw,7rem)] leading-[0.82] shadow-[8px_8px_0_#000] sm:px-4 sm:py-3">
                CRAFTING
              </span>
            </span>

            <span className="mt-2 flex flex-col items-start gap-1.5 sm:mt-3 sm:flex-row sm:items-end sm:gap-4">
              <span className="inline-block border-2 border-black bg-white px-2 py-0.5 text-xl leading-none text-blue-600 shadow-[3px_3px_0_#000] sm:mb-2 sm:text-2xl">
                THE
              </span>
              <span className="relative inline-block -rotate-2 text-[clamp(3rem,8.5vw,6.75rem)] leading-[0.82] tracking-[-0.05em] text-red-500 [text-shadow:4px_4px_0_#000] sm:[text-shadow:6px_6px_0_#000]">
                LEGACY
              </span>
              <span
                aria-hidden="true"
                className="mb-2 hidden size-7 rotate-12 border-4 border-black bg-yellow-400 shadow-[3px_3px_0_#000] xl:inline-block"
              />
            </span>
          </h1>

          <div className="mt-8 flex w-full max-w-2xl items-stretch border-4 border-black bg-black shadow-[7px_7px_0_#facc15] sm:mt-10">
            <span
              aria-hidden="true"
              className="hidden shrink-0 place-items-center border-r-4 border-black bg-yellow-400 px-4 font-display text-2xl text-black sm:grid"
            >
              80
            </span>
            <p className="flex-1 px-4 py-3 text-[10px] font-bold uppercase leading-relaxed tracking-[0.13em] text-white sm:px-5 sm:text-xs sm:tracking-[0.16em]">
              {eventConfig.subtitle}
            </p>
          </div>
        </div>

        <div className="lg:pl-2">
          <ShapeComposition />
        </div>
      </div>

      <div aria-hidden="true" className="stripe-band h-4 border-t-4 border-black" />
    </section>
  );
}
