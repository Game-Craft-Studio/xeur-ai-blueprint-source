import type { Config } from "tailwindcss";

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// XEUR.AI Brand Colors - Enhanced for High Contrast
				near_black: "#0a0a0a", // Enhanced from #121212 for better contrast
				deep_purple: "#2A0F30",
				medium_purple: "#3B1943",
				light_purple: "#5C3C75",
				bright_magenta: "#ff6bb3", // Enhanced for better visibility
				tech_green: "#00ff88", // Enhanced for better contrast
				electric_blue: "#3498DB",
				rich_gold: "#F1C40F",
				warning_red: "#E74C3C",
				
				// High Contrast Text Colors (WCAG AAA Compliant)
				text_max_contrast: "#ffffff", // Pure white - 21:1 contrast ratio
				text_secondary_contrast: "#e5e5e5", // Light gray - 16.75:1 contrast ratio
				text_tertiary_contrast: "#cccccc", // Medium gray - 11.98:1 contrast ratio
				
				// Legacy support - redirect to high contrast versions
				light_gray_text: "#ffffff", // Redirect to pure white
				dark_gray_text: "#e5e5e5", // Redirect to high contrast gray
				
				// Enhanced UI Colors
				link_blue: "#60a5fa", // Blue-400 for links - high contrast
				focus_ring: "#fbbf24", // Amber-400 for focus states
				success_green: "#10b981", // Emerald-500
				error_red: "#ef4444", // Red-500
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 15s ease infinite',
			},
			backgroundImage: {
				'hero-pattern': 'radial-gradient(circle at 50% 50%, rgba(92, 60, 117, 0.3) 0%, rgba(42, 15, 48, 0.5) 50%, rgba(10, 10, 10, 0.8) 100%)',
				'purple-gradient': 'linear-gradient(135deg, #2A0F30 0%, #3B1943 50%, #5C3C75 100%)',
				'cta-gradient': 'linear-gradient(135deg, #ff6bb3 0%, #e91e63 100%)',
			},
			textShadow: {
				'high-contrast': '0 1px 3px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.6)',
				'button': '0 1px 2px rgba(0, 0, 0, 0.8)',
			},
			boxShadow: {
				'high-contrast': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
				'focus-high-contrast': '0 0 0 3px rgba(251, 191, 36, 0.5)', // Amber ring
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		// Add plugin for text shadow support
		function({ addUtilities }: { addUtilities: any }) {
			addUtilities({
				'.text-shadow-high-contrast': {
					textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.6)',
				},
				'.text-shadow-button': {
					textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
				},
				'.focus-visible-enhanced': {
					'&:focus-visible': {
						outline: '2px solid #fbbf24',
						outlineOffset: '2px',
						boxShadow: '0 0 0 3px rgba(251, 191, 36, 0.3)',
					}
				}
			})
		}
	],
} satisfies Config;