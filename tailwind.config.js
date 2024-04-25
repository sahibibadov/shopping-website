/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b343b",
        primaryDark: "#252d32",
        secondary: " #9dca00;",
      },
      backgroundImage: {
        "hero-img": "url('./public/slider.jpg')",
        "video-img": "url('./public/video_bg.jpg')",
        "section-img": "url('./public/bg_3.jpg')",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      boxShadow: {
        card: "box-shadow: 0 0 12px 0 #f0ebeb;",
      },
    },
  },
  plugins: [],
};
