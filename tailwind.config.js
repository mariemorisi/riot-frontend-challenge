/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "md-14": ["0.875rem", { lineHeight: "1.25rem", fontWeight: 500 }],
        "sb-13": ["0.8125rem", { lineHeight: "1.25rem", fontWeight: 600 }],
      },

      colors: {
        charcoal: "#111111",
        slate: "#555555",
        steel: "#999999",
      },

      boxShadow: {
        "regular-1":
          "0px 8px 40px 0px rgba(0, 0, 0, 0.04), 0px 2px 5px 0px rgba(0, 0, 0, 0.05), 0px 0px 2px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
};
