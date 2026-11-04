import { useState } from "react";
import BackgroundToggle from "./BackgroundToggle";
import { cn } from "../lib/cn";

const pad = (value) => String(value).padStart(2, "0");

function imageSource(imageUrl) {
  if (/^https?:\/\//.test(imageUrl)) return imageUrl;
  return `${import.meta.env.BASE_URL}${imageUrl.replace(/^\//, "")}`;
}

export default function LogoCard({ logo }) {
  const [mode, setMode] = useState("light");
  const [imageFailed, setImageFailed] = useState(false);

  const isDark = mode === "dark";
  const paddedId = pad(logo.id);

  return (
    <article className="group relative flex flex-col border-4 border-black bg-white shadow-[8px_8px_0_#000] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#000]">
      <div
        className={cn(
          "relative aspect-square overflow-hidden border-b-4 border-black p-6 transition-colors duration-200 sm:p-8",
          isDark ? "bg-black" : "bg-slate-50",
        )}
      >
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="border-4 border-black bg-white px-4 py-3 text-center shadow-[5px_5px_0_#000]">
              <p className="font-display text-2xl uppercase leading-none text-black">
                LOGO {paddedId}
              </p>
              <p className="mt-1.5 text-[8px] font-extrabold uppercase tracking-[0.18em] text-black/55">
                Artwork placeholder
              </p>
            </div>
          </div>
        ) : (
          <img
            src={imageSource(logo.imageUrl)}
            alt={`Logo ${logo.id}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain"
          />
        )}

        <BackgroundToggle
          value={mode}
          onChange={setMode}
          className="absolute right-3 top-3 z-20"
        />
      </div>

      <span
        className={cn(
          "absolute -left-3 -top-3 z-30 grid size-12 place-items-center border-4 border-black font-display text-base leading-none shadow-[4px_4px_0_#000] sm:size-14 sm:text-lg",
          logo.id % 2 === 0
            ? "rounded-full bg-blue-600 text-white"
            : "bg-yellow-400 text-black",
        )}
      >
        {paddedId}
      </span>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl uppercase leading-[1.05] sm:text-2xl">
          {logo.title}
        </h3>
        <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700">
          Designed by <span className="text-black">{logo.designerName}</span>
        </p>
        <p className="mt-3 text-[13px] font-medium leading-relaxed text-black/70">
          {logo.conceptDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 border-t-2 border-black pt-4">
          {logo.tags.map((tag, index) => (
            <span
              key={tag}
              className={cn(
                "border-2 border-black px-2 py-0.5 text-[9px] font-extrabold uppercase leading-tight tracking-[0.1em]",
                index % 2 === 0
                  ? "bg-blue-600 text-white"
                  : "bg-yellow-400 text-black",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
