import { eventConfig } from "../config";

function AcmDiamond() {
  return (
    <span
      aria-hidden="true"
      className="relative grid size-11 shrink-0 place-items-center sm:size-14"
    >
      <span className="absolute inset-1 rotate-45 border-4 border-black bg-black" />
      <span className="absolute inset-[13px] rotate-45 border-2 border-white sm:inset-[17px]" />
      <span className="relative font-display text-[7px] uppercase leading-none tracking-tight text-white sm:text-[9px]">
        ACM
      </span>
    </span>
  );
}

export default function Header() {
  return (
    <header className="border-b-4 border-black bg-yellow-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <AcmDiamond />
          <div className="min-w-0">
            <p className="text-[9px] font-extrabold uppercase leading-tight tracking-[0.16em] text-black sm:text-[11px]">
              {eventConfig.presentedBy}
            </p>
            <p className="mt-1 hidden text-[9px] font-bold uppercase tracking-[0.22em] text-black/60 sm:block">
              80th anniversary · logo design competition
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="hidden shrink-0 items-center border-4 border-black bg-black px-3 py-1.5 text-white shadow-[4px_4px_0_#fff] sm:flex"
        >
          <span className="font-display text-2xl leading-none text-yellow-400">80</span>
          <span className="ml-2 text-[8px] font-bold uppercase leading-tight tracking-[0.18em] text-white">
            Years
            <br />
            of legacy
          </span>
        </div>
      </div>
    </header>
  );
}
