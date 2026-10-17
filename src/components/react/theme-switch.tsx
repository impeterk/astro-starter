import { useState, type JSX } from "react";

import { useMediaQuery } from "@reactuses/core";
import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import type { Theme } from "@/lib/types";
import { actions } from "astro:actions";

const defFunc = () => null;

function ThemeOption({
  icon,
  value,
  isActive,
  onClick = defFunc,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick?: (value: Theme) => void;
}) {
  return (
    <button
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      className={cn(
        "relative flex size-8 cursor-default items-center justify-center rounded-full transition-all [&_svg]:size-4",
      )}
      role="radio"
      type="button"
      onClick={() => onClick(value as Theme)}
    >
      {icon}
    </button>
  );
}

const THEME_OPTIONS = [
  {
    icon: <IconDeviceDesktop />,
    value: "system",
  },
  {
    icon: <IconSun />,
    value: "light",
  },
  {
    icon: <IconMoon />,
    value: "dark",
  },
];

function ThemeSwitcher({ active = "system" }: { active?: Theme }) {
  const [theme, setTheme] = useState(active);

  const isDark = useMediaQuery("(prefers-color-scheme: dark)", false);

  async function handleClick(theme: Theme) {
    setTheme(theme);
    actions.switchTheme(theme);
    if (theme === "system") {
      theme += isDark ? " dark" : " light";
    }
    document.documentElement.className = theme;
  }
  const pos_left = `${THEME_OPTIONS.findIndex((t) => t.value === theme) * 2}rem`;

  return (
    <div
      className="bg-muted ring-secondary relative inline-flex h-min items-center rounded-full ring-1"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          isActive={theme === option.value}
          value={option.value}
          onClick={handleClick}
        />
      ))}

      <div
        className={cn(
          "border-foreground dark:border-primary absolute size-8 rounded-full border transition-all",
        )}
        style={{ left: pos_left }}
      />
    </div>
  );
}

export { ThemeSwitcher };
