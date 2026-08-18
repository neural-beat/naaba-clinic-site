module.exports = {
  content: ["../index.html"],
  safelist: [
    'hidden', 'active',
    { pattern: /^(bg|text|border)-(medical|brandDark|warmBg|accentAmber)(-\d+)?$/ },
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        brandDark: '#1e293b',
        warmBg: '#faf8f5',
        accentAmber: '#d97706'
      }
    }
  },
  plugins: []
}
