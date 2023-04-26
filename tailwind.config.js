module.exports = {
  mode: "jit",
  content: ["./node_modules/flowbite/**/*.js"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
