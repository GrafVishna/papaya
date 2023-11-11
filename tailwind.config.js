/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "heading-h1": ["60px", "normal"],
      "heading-h2": ["40px", "normal"],
      "heading-h3": ["30px", "normal"],
      "body-intro": ["24px", "normal"],
      "body-main": ["20px", "normal"],
      "headline-text": ["17px", "1.3"],
      default: ["16px", "1.3"],
      caption: ["15px", "1.3"],
      small: ["13px", "1.3"],
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

      height: {
        header: "calc(100vh - 122px)",
        "header-mobile": "calc(100vh - 117px - 56px)",
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
        "bs-filter": "0px 15px 20px -10px rgba(0, 0, 0, 0.30)",
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
        "video-items": "repeat(auto-fit, minmax(320px, 1fr))",
        "video-items-m": "repeat(auto-fit, minmax(290px, 1fr))",
      },
      gridTemplateRows: {
        "main-d": "auto, 1fr",
      },

      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "slide-content-top": {
          "0%": { transform: "translateY(-5px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "content-wrapper": "slide-content-top 0.4s ease both",
      },
    },
  },
  plugins: [],
};
