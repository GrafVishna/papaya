/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      17: ["17px", "22px"],
      14: ["14px", "20px"],
      13: ["13px", "16px"],
    },

    letterSpacing: {
      "minus-04": "-0.408px",
      "minus-03": "-0.32px",
    },

    extend: {
      colors: {
        blue: "#22D7FF",
        pink: "#C427FBFF",
      },
      backgroundImage: {
        "lg-main": "linear-gradient(168deg, #2B2F53 1.62%, #1C1B33 95.72%)",
        "lg-sec": "linear-gradient(135deg, #293462 0%, #343E61 100%)",
        "lg-nav":
          "radial-gradient(50% 128.57% at 50% -36.61%, #8015A7 0%, rgba(97, 54, 144, 0.00) 100%)",
        "lg-nav-t":
          "linear-gradient(180deg, rgba(196, 39, 251, 0.00) 0%, rgba(196, 39, 251, 0.20) 100%)",
        "lg-card":
          "linear-gradient(180deg, rgba(72, 49, 157, 0.20) 18.75%, rgba(72, 49, 157, 0.00) 100%)",
        "lg-line":
          "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.30) 50.4%, rgba(255, 255, 255, 0.00) 96.77%)",
        "lg-f-line":
          "linear-gradient(180deg, rgba(196, 39, 251, 0.00) 0%, rgba(196, 39, 251, 0.20) 82.14%)",
        "lg-body": "linear-gradient(180deg, #2B2F53 3.16%, #1D1C34 40.05%)",
        "video-card":
          "linear-gradient(180deg, rgba(72, 49, 157, 0.20) 18.75%, rgba(72, 49, 157, 0.00) 100%)",
      },

      boxShadow: {
        "bs-body": "-10px 30px 80px 0px rgba(59, 38, 123, 0.70)",
        "bs-filter": "0px 15px 20px -5px rgba(0, 0, 0, 0.40)",
        "bs-aside": "15px 0px 20px -5px rgba(0, 0, 0, 0.40)",
        "bs-aside-m": "0px -15px 20px -5px rgba(0, 0, 0, 0.30)",
      },

      screens: {
        "mobile-s": "480px",
        mobile: "768px",
        tablet: "991px",
        "tablet-big": "1100px",
        desktop: "1420px",
      },

      padding: {
        hd: "30px",
        "video-card": "60%",
      },

      gridTemplateColumns: {
        "main-d": "248px, 1fr",
        "main-t": "200px, 1fr",
        "item-info": "auto, 1fr",
        "video-items": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        "main-d": "auto, 1fr",
      },

      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
