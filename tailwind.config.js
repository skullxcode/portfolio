/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
        "surface": "var(--surface)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
        "on-secondary": "var(--on-secondary)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed)",
        "inverse-on-surface": "var(--inverse-on-surface)",
        "on-secondary-container": "var(--on-secondary-container)",
        "on-error": "var(--on-error)",
        "surface-container-high": "var(--surface-container-high)",
        "on-primary-container": "var(--on-primary-container)",
        "surface-container-low": "var(--surface-container-low)",
        "on-tertiary-container": "var(--on-tertiary-container)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "outline-variant": "var(--outline-variant)",
        "on-tertiary": "var(--on-tertiary)",
        "primary-container": "var(--primary-container)",
        "tertiary-container": "var(--tertiary-container)",
        "on-secondary-fixed": "var(--on-secondary-fixed)",
        "primary-fixed": "var(--primary-fixed)",
        "tertiary-fixed": "var(--tertiary-fixed)",
        "inverse-surface": "var(--inverse-surface)",
        "on-error-container": "var(--on-error-container)",
        "secondary-container": "var(--secondary-container)",
        "on-surface-variant": "var(--on-surface-variant)",
        "on-primary": "var(--on-primary)",
        "surface-container": "var(--surface-container)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim)",
        "surface-variant": "var(--surface-variant)",
        "background": "var(--background)",
        "secondary": "var(--secondary)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "on-background": "var(--on-background)",
        "inverse-primary": "var(--inverse-primary)",
        "primary": "var(--primary)",
        "on-surface": "var(--on-surface)",
        "primary-fixed-dim": "var(--primary-fixed-dim)",
        "tertiary": "var(--tertiary)",
        "secondary-fixed": "var(--secondary-fixed)",
        "surface-tint": "var(--surface-tint)",
        "surface-container-highest": "var(--surface-container-highest)",
        "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
        "surface-dim": "var(--surface-dim)",
        "surface-bright": "var(--surface-bright)",
        "error-container": "var(--error-container)",
        "outline": "var(--outline)",
        "error": "var(--error)",
        "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "gutter": "24px",
        "container-max": "1440px",
        "section-gap": "160px",
        "margin-page-mobile": "24px",
        "margin-page": "64px",
        "section-gap-mobile": "80px"
      },
      fontFamily: {
        "headline-md": ["Hanken Grotesk"],
        "display-lg-mobile": ["Hanken Grotesk"],
        "body-md": ["Inter"],
        "label-mono": ["Geist"],
        "display-lg": ["Hanken Grotesk"],
        "body-lg": ["Inter"],
        "headline-lg": ["Hanken Grotesk"]
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "400" }],
        "display-lg-mobile": ["48px", { lineHeight: "52px", letterSpacing: "-0.02em", fontWeight: "200" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-mono": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "500" }],
        "display-lg": ["80px", { lineHeight: "90px", letterSpacing: "-0.04em", fontWeight: "200" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "300" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms')
  ]
}
