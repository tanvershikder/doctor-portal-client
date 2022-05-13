module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}
