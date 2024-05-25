/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        // Light Theme
        "sidebar-bg": "#f0f4f8",
        "sidebar-button-bg": "#D7DEDC",
        "sidebar-button-text": "#333333",
        "header-bg": "#e8e8e8",
        "header-text": "#333333",
        "main-bg": "#ffffff",
        "todo-bg": "#f9f9f9",
        "todo-text": "#333333",
        "modal-bg": "#ffffff",
        "modal-button-bg": "#4a90e2",
        "modal-button-text": "#ffffff",
        "input-bg": "#ffffff",
        "input-text": "#333333",

        // Dark Theme
        "sidebar-bg-dark": "#2d3439",
        "sidebar-button-bg-dark": "#1c2025",
        "sidebar-button-text-dark": "#f0f0f0",
        "header-bg-dark": "#24292e",
        "header-text-dark": "#f0f0f0",
        "main-bg-dark": "#1c2025",
        "todo-bg-dark": "#2d3439",
        "todo-text-dark": "#f0f0f0",
        "modal-bg-dark": "#24292e",
        "modal-button-bg-dark": "#5aa9e6",
        "modal-button-text-dark": "#f0f0f0",
        "input-bg-dark": "#2d3439",
        "input-text-dark": "#f0f0f0",
      },
    },
    screens: {
      TV: { max: "2560px" },

      "large-desktop": { max: "1600px" },

      "mid-desktop": { max: "1200px" },

      "small-desktop": { max: "1024px" },

      tablet: { max: "768px" },

      "small-tablet": { max: "640px" },

      "large-mobile": { max: "450px" },

      "mid-mobile": { max: "375px" },

      "small-mobile": { max: "325px" },
    },
  },
  plugins: [],
}

