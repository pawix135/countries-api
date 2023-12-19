import { MoonIcon } from "lucide-react";
import { useDark } from "../../hooks/useDark";

const ThemeSwitcher: React.FC = () => {
  const [theme, toggle] = useDark();

  return (
    <button
      type="button"
      id="theme-switcher"
      onClick={toggle}
      className="flex flex-row gap-3 items-center dark:text-light-white font-bold"
    >
      <MoonIcon
        size={16}
        fill={theme == "dark" ? "white" : "none"}
        color={theme == "dark" ? "white" : "black"}
      />
      Dark mode
    </button>
  );
};

export default ThemeSwitcher;
