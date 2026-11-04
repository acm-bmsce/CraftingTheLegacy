import { AtSign, Award, Globe, Mail } from "lucide-react";
import { eventConfig } from "../config";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white">
      <div
        aria-hidden="true"
        className="stripe-band h-8 w-full border-b-4 border-black sm:h-10"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1.35fr_0.8fr_0.8fr] md:gap-8">
          <div className="border-4 border-white bg-white p-6 text-black shadow-[8px_8px_0_#facc15]">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center border-4 border-black bg-red-500 text-white">
                <Award className="size-4" strokeWidth={2.6} aria-hidden="true" />
              </span>
              <p className="font-display text-xs uppercase leading-tight">
                The winning mark
              </p>
            </div>

            <p className="mt-5 text-lg font-extrabold leading-snug sm:text-xl">
              {eventConfig.winningNote}
            </p>

            <p className="mt-5 inline-flex border-2 border-black bg-yellow-400 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-black">
              NOV {eventConfig.milestoneYear} — OCT {eventConfig.milestoneYear + 1}
            </p>
          </div>

          <div className="border-4 border-white bg-blue-600 p-6 shadow-[8px_8px_0_#fff]">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/80">
              Celebrating
            </p>
            <p className="mt-2 font-display text-7xl leading-none text-yellow-400">80</p>
            <p className="mt-2 font-display text-sm uppercase leading-tight text-white">
              Years of legacy
            </p>
            <p className="mt-4 border-t-2 border-white/30 pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
              {eventConfig.foundedYear} — {eventConfig.milestoneYear}
            </p>
          </div>

          <div className="border-4 border-black bg-yellow-400 p-6 text-black shadow-[8px_8px_0_#fff]">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em]">
              Get in touch
            </p>

            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${eventConfig.contactEmail}`}
                className="flex items-center gap-2 text-xs font-bold underline-offset-4 hover:underline"
              >
                <Mail className="size-3.5 shrink-0" strokeWidth={2.8} aria-hidden="true" />
                {eventConfig.contactEmail}
              </a>
              <a
                href={eventConfig.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold underline-offset-4 hover:underline"
              >
                <Globe className="size-3.5 shrink-0" strokeWidth={2.8} aria-hidden="true" />
                {eventConfig.websiteLabel}
              </a>
              <a
                href={eventConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold underline-offset-4 hover:underline"
              >
                <AtSign className="size-3.5 shrink-0" strokeWidth={2.8} aria-hidden="true" />
                {eventConfig.instagramHandle}
              </a>
            </div>

            <p className="mt-6 border-t-2 border-black pt-4 text-[9px] font-extrabold uppercase leading-relaxed tracking-[0.16em]">
              {eventConfig.chapter}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t-2 border-white/20 pt-5 text-[9px] font-bold uppercase leading-relaxed tracking-[0.18em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {eventConfig.milestoneYear} {eventConfig.chapter}
          </p>
          <p>80th anniversary logo design competition</p>
        </div>
      </div>
    </footer>
  );
}
