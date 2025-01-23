import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        sofia: ["Sofia Sans"],
        share_sans: ["Share Tech"],
        share_mono: ["Share Tech Mono"],
        wind: ["WindSong"],
        kode: ["Kode Mono"],
        sarpanch: ["Sarpanch"],
        teko: ["Teko"],
      },
    },
  },
  plugins: [],
} satisfies Config;
