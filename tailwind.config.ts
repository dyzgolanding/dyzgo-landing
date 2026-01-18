import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        neonPurple: "#a855f7", // Purple 500 - Brillante
        neonPink: "#d946ef",   // Fuchsia 500 - Brillante (No rojo)
        neonCyan: "#06b6d4",   // Cyan 500
        glass: "rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "neon-gradient": "linear-gradient(to right, #d946ef, #a855f7)",
      },
      animation: {
        "blob": "blob 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)",
        "float": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite alternate",
        "flow": "flow 20s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(50px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" },
          "100%": { boxShadow: "0 0 50px rgba(217, 70, 239, 0.6)" },
        },
        flow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        }
      },
    },
  },
  plugins: [],
};
export default config;