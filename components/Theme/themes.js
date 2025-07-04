export const themes = {
  light: {
    settings: {
      "--primary-color": "#212121",                  // глубокий тёмно-серый для текста
      "--secondary-color": "#1565c0",                // насыщенный синий
      "--tertiary-color": "#555",                    // серый для доп. текста
      "--quaternery-color": "#cccccc",               // светлый бордер
      "--primary-bg-color": "#f0f2f5",               // светло-серый фон вместо чисто белого
      "--opacity-bg-color": "#0000000a",             // лёгкая тень
      "--secondary-bg-color": "#ffffff",             // белый, но только как блок/карточка
      "--primary-shadow": "0 1px 4px rgba(0, 0, 0, 0.1)",
      "--border-radius": "8px",
    },
    label: "🌕",
  },
  dark: {
    settings: {
      "--primary-color": "#ddd",
      "--secondary-color": "#2196f3",
      "--tertiary-color": "#ddd",
      "--quaternery-color": "#77777724",
      "--primary-bg-color": "linear-gradient(to bottom, #1e1e1e, #2a2a2a)",
      "--secondary-bg-color": "#fff",
      "--opacity-bg-color": "#8e8e8e12",
      "--primary-shadow": "2px 1px 6px 0px #ddd",
      "--border-radius": "8px",
    },
    label: "🌚",
  },
};
