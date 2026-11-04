import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/cn";

const OPTIONS = [
  { id: "light", label: "Light", Icon: Sun },
  { id: "dark", label: "Dark", Icon: Moon },
];

export default function BackgroundToggle({
  value,
  onChange,
  className,
  label = "Preview background",
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "inline-flex border-2 border-black bg-white shadow-[3px_3px_0_#000]",
        className,
      )}
    >
      {OPTIONS.map(({ id, label: optionLabel, Icon }, index) => {
        const active = value === id;

        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            aria-label={`Preview on ${optionLabel.toLowerCase()} background`}
            title={`Preview on ${optionLabel.toLowerCase()} background`}
            onClick={(event) => {
              event.stopPropagation();
              onChange(id);
            }}
            className={cn(
              "grid size-8 place-items-center transition-colors duration-150 sm:size-9",
              index === 1 && "border-l-2 border-black",
              active
                ? id === "light"
                  ? "bg-yellow-400 text-black"
                  : "bg-blue-600 text-white"
                : "bg-white text-black/45 hover:bg-slate-100 hover:text-black",
            )}
          >
            <Icon className="size-4" strokeWidth={2.6} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
