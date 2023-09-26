import useTheme from "../contexts/theme";

export default function ThemeBtn() {
  // we are calling the `useTheme` function which work same as the
  // ` const useTheme = useContext(ThemeContext) `
  // we are taking out the all the parameter available inside the `ThemeContext`.
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // This is onChangeBtn method logic of the targeting toggle button, which is available inside the APP.

  const onChangeBtn = (e) => {
    // we are checking the button is checked or not. and storing inside the variable, we are hardcoding the value,
    // If the button is checked than its darkMode.

    const darkModeStatus = e.currentTarget.checked;
    // If the button is checked then enable the darkMode, else enable the light mode

    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
