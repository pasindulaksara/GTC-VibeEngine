/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ensure NativeWind knows where to look for your vibe-coded components
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // The "Base Engine" Backgrounds
        cinema: {
          950: '#020617', // Main background: Deep slate for high-contrast posters
          900: '#0f172a', // Card backgrounds: Subtle lift from the main BG
          800: '#1e293b', // Border/Divider: Low-key separation
        },
        // The "Vibe Engine" Feelings
        vibe: {
          hype: '#ef4444',    // 🔥 Hype: Action, Adventure, fast Comedy
          mind: '#8b5cf6',    // 🧠 Mind: Sci-Fi, Thriller, complex plots
          happy: '#fbbf24',   // 🥰 Happy: Romance, Family, "Happiness Overloading"
          chill: '#10b981',   // 😊 Chill: Low-stress, easy background watching
          feels: '#3b82f6',   // 😭 Feels: Heartfelt, "Grave of the Fireflies" sad
          scared: '#64748b',  // 💀 Scared: Horror, tension, "Scaredy Cat" mode
        },
        corn: {
          DEFAULT: '#FFD700', // The Gold standard for the GTC brand
          glow: 'rgba(255, 215, 0, 0.3)',
        }
      },
      fontFamily: {
        // High-end typography for that ApexFlow AI feel
        heavy: ['GTC-Heavy'], // For "GRAB THE CORN" headers
        body: ['Inter-Regular'], // For general movie metadata
      }
    },
  },
  plugins: [],
}