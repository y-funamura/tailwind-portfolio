/** @type {import('tailwindcss').Config} */
const prod = process.env.NODE_ENV === "production";
const BACKEND_URL = prod ? "/repository-Name" : "";
const dir = String(BACKEND_URL);
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      custom: "10px 10px 50px rgba(0, 0, 0, 0.2)",
    },
    extend: {
      backgroundImage: (theme) => ({
        "portfolio-img": "url('/img/portfolio_main.png')".replace(
          "/img",
          dir + "/img"
        ),
        "portfolio-img": "url('/img/portfolio_main.png')".replace(
          "/img",
          dir + "/img"
        ),
        "chat-img": "url('/img/chat_main.png')".replace("/img", dir + "/img"),
      }),
      animation: {
        slideIn: "slideIn 1s ease-in forwards",
        "rotate-in-center":
          "rotate-in-center 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "rotate-in-center": {
          "0%": {
            transform: "rotate(-360deg)",
            opacity: "0",
          },
          to: {
            transform: "rotate(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
