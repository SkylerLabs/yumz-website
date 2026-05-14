import type { Config } from "tailwindcss";

// Yumz brand tokens — anchored to the orange app icon.
// Re-art-directed for AI-native, iPhone-first, motion-rich consumer tech feel.
// Reference: TikTok + Apple + Beli + Arc + Spotify Wrapped.
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Orange brand scale, sampled from the Yumz app icon gradient.
        brand: {
          50: "#FFF4EC",
          100: "#FFE2CC",
          200: "#FFC499",
          300: "#FFA266",
          400: "#FF8A3D", // gradient top
          500: "#F26B1F", // primary
          600: "#D8550F", // gradient bottom
          700: "#B0430A",
          800: "#823109",
          900: "#52200A",
        },
        // Warm neutrals — paper / cream tones for appetizing surfaces
        cream: {
          50: "#FFFBF6",
          100: "#FBF3E9",
          200: "#F3E7D3",
          300: "#E5D2B3",
        },
        // Warm near-black for body text + light sections
        ink: {
          900: "#1B1410",
          800: "#2A1F18",
          700: "#3D2E23",
          600: "#5A4638",
          500: "#7A6353",
          400: "#A18B7B",
          300: "#C9B9AB",
        },
        // OLED-warm darks for AI/depth sections.
        // Nearly black with a brown undertone so brand-orange glows feel
        // continuous, not like neon-on-black.
        night: {
          950: "#0A0604",
          900: "#0F0A07",
          800: "#1A100A",
          700: "#241710",
          600: "#352318",
          500: "#4A3324",
        },
        // AI confidence accent — mint green. Used sparingly for "Match 94%" and
        // other algorithmic/trust indicators. Never as a surface color.
        match: {
          400: "#2EE89C",
          500: "#22D886",
          600: "#10B86C",
        },
        // Cultural-energy accent — hot pink. Used only for "Trending"/social
        // signals (very small surfaces).
        hype: {
          400: "#FF5F8A",
          500: "#FF3D7F",
          600: "#E61E66",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
        // Display family is now Geist — modern grotesk, app-native, AI-feeling.
        display: [
          "Geist",
          "ui-sans-serif",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "sans-serif",
        ],
        mono: [
          "Geist Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      // Tighter, sharper fluid scale. Headlines feel digital, not editorial.
      fontSize: {
        "display-2xl": [
          "clamp(3rem, 7.2vw, 5.75rem)",
          { lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "display-xl": [
          "clamp(2.25rem, 5vw, 4rem)",
          { lineHeight: "1.0", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(1.875rem, 3.2vw, 2.625rem)",
          { lineHeight: "1.05", letterSpacing: "-0.028em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.5rem, 2.4vw, 2rem)",
          { lineHeight: "1.1", letterSpacing: "-0.022em", fontWeight: "600" },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        // Warm orange glow — the signature glow for hero/CTA energy
        glow: "0 0 60px -10px rgba(242, 107, 31, 0.55)",
        glowLg: "0 0 120px -20px rgba(242, 107, 31, 0.55), 0 0 40px -10px rgba(255, 138, 61, 0.35)",
        glowSm: "0 0 30px -8px rgba(242, 107, 31, 0.5)",
        // Mint glow for AI confidence indicators
        glowMatch: "0 0 24px -6px rgba(34, 216, 134, 0.6)",
        // Hot pink for trending energy
        glowHype: "0 0 24px -6px rgba(255, 61, 127, 0.55)",
        // Surfaces
        soft: "0 10px 40px -12px rgba(242, 107, 31, 0.22)",
        card: "0 4px 24px -8px rgba(27, 20, 16, 0.10)",
        cardHover: "0 18px 48px -12px rgba(27, 20, 16, 0.20)",
        // Glass on dark
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 24px 60px -20px rgba(0,0,0,0.8)",
        // iPhone shadow
        device:
          "0 60px 120px -30px rgba(15, 10, 7, 0.55), 0 30px 60px -20px rgba(242, 107, 31, 0.35)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(180deg, #FF8A3D 0%, #F26B1F 55%, #D8550F 100%)",
        "brand-gradient-soft":
          "linear-gradient(180deg, #FFF4EC 0%, #FFE2CC 100%)",
        "warm-fade":
          "linear-gradient(180deg, #FFFBF6 0%, #FBF3E9 100%)",
        // OLED-warm — anchor for dark AI sections
        "oled-warm":
          "radial-gradient(120% 80% at 70% 0%, rgba(255, 138, 61, 0.18) 0%, rgba(15, 10, 7, 0) 60%), linear-gradient(180deg, #0F0A07 0%, #1A100A 100%)",
        // Aurora — used behind iPhone in hero
        "aurora-orange":
          "radial-gradient(60% 60% at 50% 50%, rgba(255, 138, 61, 0.55) 0%, rgba(242, 107, 31, 0.25) 35%, rgba(15, 10, 7, 0) 70%)",
        // Mesh — for SmartModes Main Character tile
        "mesh-purple":
          "radial-gradient(90% 90% at 30% 20%, #C56BFF 0%, #6B27D6 50%, #2A0E5A 100%)",
        "mesh-red":
          "radial-gradient(90% 90% at 30% 20%, #FF6B4A 0%, #B22020 60%, #2A0606 100%)",
        "mesh-pink":
          "radial-gradient(90% 90% at 30% 20%, #FF8FB1 0%, #FF3D7F 55%, #5A0E2A 100%)",
        "mesh-green":
          "radial-gradient(90% 90% at 30% 20%, #6FFFB0 0%, #18C265 50%, #062A14 100%)",
        "mesh-blue":
          "radial-gradient(90% 90% at 30% 20%, #6FB7FF 0%, #1F6BD8 55%, #06152A 100%)",
        "mesh-silver":
          "radial-gradient(90% 90% at 30% 20%, #FFFFFF 0%, #C9D2DB 55%, #5C6772 100%)",
        // Recommendation confidence bar
        "match-bar":
          "linear-gradient(90deg, #22D886 0%, #2EE89C 100%)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        250: "250ms",
        450: "450ms",
        700: "700ms",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        // Floating chips around the iPhone
        floatA: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        floatB: {
          "0%, 100%": { transform: "translateY(0) rotate(1deg)" },
          "50%": { transform: "translateY(-12px) rotate(-1deg)" },
        },
        floatC: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-6px) translateX(4px)" },
        },
        // Pulse glow for AI badges
        pulseGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 0 0 rgba(34, 216, 134, 0.55), 0 0 24px -6px rgba(34, 216, 134, 0.6)",
          },
          "50%": {
            boxShadow:
              "0 0 0 8px rgba(34, 216, 134, 0), 0 0 32px -4px rgba(34, 216, 134, 0.7)",
          },
        },
        // Match-bar fill on mount
        matchFill: {
          "0%": { width: "0%" },
          "100%": { width: "var(--match)" },
        },
        // Shimmer for AI processing chips
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // Subtle aurora drift behind hero
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -2%, 0) scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        marqueeReverse: "marqueeReverse 50s linear infinite",
        floatA: "floatA 6s ease-in-out infinite",
        floatB: "floatB 7s ease-in-out infinite",
        floatC: "floatC 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-out infinite",
        matchFill: "matchFill 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 2.4s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
