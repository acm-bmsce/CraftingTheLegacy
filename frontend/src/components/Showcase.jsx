import { LayoutGrid } from "lucide-react";
import { logos } from "../data/logos";
import LogoCard from "./LogoCard";

const pad = (value) => String(value).padStart(2, "0");

export default function Showcase() {
  const lastEntry = pad(logos.length);

  return (
    <section id="showcase" className="grid-paper pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 border-4 border-black bg-black p-4 text-white shadow-[8px_8px_0_#facc15] sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center border-4 border-white bg-blue-600">
              <LayoutGrid className="size-5" strokeWidth={2.6} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl uppercase leading-none sm:text-2xl">
                THE TOP {logos.length}
              </h2>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-[10px]">
                Shortlisted logo concepts
              </p>
            </div>
          </div>

          <span className="inline-flex w-fit border-4 border-white bg-yellow-400 px-3 py-1 font-display text-sm uppercase leading-none text-black">
            01 — {lastEntry}
          </span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {logos.map((logo) => (
            <LogoCard key={logo.id} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
