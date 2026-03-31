/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4ff",
          100: "#dbe8ff",
          200: "#bdd2ff",
          300: "#8fb2ff",
          400: "#5b8cff",
          500: "#3367ff",
          600: "#214de6",
          700: "#183bb8",
          800: "#132f8f",
          900: "#0e214f",
        },
        cyanBrand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(14, 33, 79, 0.08)",
        glow: "0 20px 50px rgba(34, 211, 238, 0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(34,211,238,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(51,103,255,0.15), transparent 35%)",
      },
    },
  },
  plugins: [],
};
