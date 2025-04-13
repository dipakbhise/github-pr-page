import { useDarkMode } from "../../hooks/userDarkMode";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="relative flex items-center w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none"
      >
        <div
          className={`absolute text-xl left-1.5 transition-opacity duration-200 z-10  ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        >
          🌞
        </div>
        <div
          className={`absolute text-xl right-1.5 transition-opacity duration-200 z-10 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          🌙
        </div>
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : ""
          }`}
        />
      </button>
      {/* <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
    >
      {theme === 'dark' ? '🌙' : '🌞'}
    </button> */}
    </>
  );
};

export default ThemeToggleButton;
