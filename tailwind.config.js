module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'move-bg': {
          to: {
            backgroundPosition: '400% 0',
          },
        },
      },
      animation: {
        'move-bg': 'move-bg 8s infinite linear',
        'move-bg-l': 'move-bg 16s infinite linear',
      },
    },
  },
  plugins: [],
}
