import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/themeSlice";

const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = useCallback(() => {
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;

    const isDark = htmlElement.classList.contains("dark");

    if (isDark) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); 
      dispatch(setTheme("light"));
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); 
      dispatch(setTheme("dark"));
    }
  }, [dispatch]);

  return { theme, toggleTheme };
};

export default useTheme;
