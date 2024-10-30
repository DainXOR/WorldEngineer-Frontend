/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
  extend: {
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))'
      },
      'we-blue': {
        50: '#B1D4F6',
        100: '#A0C0E0',
        200: '#90ADC9',
        300: '#7F99B3',
        400: '#6E859D',
        500: '#5E7287',
        600: '#4D5E70',
        700: '#3C4A5A',
        800: '#2B3644',
        900: '#1B232D',
        950: '#0A1119'
      },
      'fiord': {
          '50': '#f5f7fa',
          '100': '#ebeef3',
          '200': '#d2d9e5',
          '300': '#abb9ce',
          '400': '#7e94b2',
          '500': '#5e7799',
          '600': '#435674',
          '700': '#3c4c68',
          '800': '#354257',
          '900': '#303a4a',
          '950': '#202531',
      },
    },
  },
  
},
plugins: [require("tailwindcss-animate")],
}

