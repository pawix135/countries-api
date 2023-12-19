import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <header className="w-full py-10 dark:bg-dark-dark-blue shadow-md px-5">
      <div className="flex flex-row justify-between items-center container mx-auto">
        <Link to={"/"}>
          <h1 className="dark:text-light-white text-light-very-dark-blue font-bold text-xl">
            Where in the world?
          </h1>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
