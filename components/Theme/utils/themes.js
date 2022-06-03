export const getTheme = () => {
  return localStorage.getItem("theme");
};

export const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
};
