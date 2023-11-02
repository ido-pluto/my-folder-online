const THEME_SETTINGS = {
    "semanticTokens": {
        "colors": {
            "chakra-body-text": {
                "_light": "gray.800",
                "_dark": "whiteAlpha.900"
            },
            "chakra-body-bg": {
                "_light": "white",
                "_dark": "gray.800"
            },
            "chakra-border-color": {
                "_light": "gray.200",
                "_dark": "whiteAlpha.300"
            },
            "chakra-inverse-text": {
                "_light": "white",
                "_dark": "gray.800"
            },
            "chakra-subtle-bg": {
                "_light": "gray.100",
                "_dark": "gray.700"
            },
            "chakra-subtle-text": {
                "_light": "gray.600",
                "_dark": "gray.400"
            },
            "chakra-placeholder-color": {
                "_light": "gray.500",
                "_dark": "whiteAlpha.400"
            }
        }
    },
    "direction": "ltr",
    "breakpoints": {
        "base": "0em",
        "sm": "30em",
        "md": "48em",
        "lg": "62em",
        "xl": "80em",
        "2xl": "96em"
    },
    "zIndices": {
        "hide": -1,
        "auto": "auto",
        "base": 0,
        "docked": 10,
        "dropdown": 1000,
        "sticky": 1100,
        "banner": 1200,
        "overlay": 1300,
        "modal": 1400,
        "popover": 1500,
        "skipLink": 1600,
        "toast": 1700,
        "tooltip": 1800
    },
    "radii": {
        "none": "0",
        "sm": "0.125rem",
        "base": "0.25rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
    },
    "blur": {
        "none": 0,
        "sm": "4px",
        "base": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    "colors": {
        "transparent": "transparent",
        "current": "currentColor",
        "black": "#000000",
        "white": "#FFFFFF",
        "whiteAlpha": {
            "50": "rgba(255, 255, 255, 0.04)",
            "100": "rgba(255, 255, 255, 0.06)",
            "200": "rgba(255, 255, 255, 0.08)",
            "300": "rgba(255, 255, 255, 0.16)",
            "400": "rgba(255, 255, 255, 0.24)",
            "500": "rgba(255, 255, 255, 0.36)",
            "600": "rgba(255, 255, 255, 0.48)",
            "700": "rgba(255, 255, 255, 0.64)",
            "800": "rgba(255, 255, 255, 0.80)",
            "900": "rgba(255, 255, 255, 0.92)"
        },
        "blackAlpha": {
            "50": "rgba(0, 0, 0, 0.04)",
            "100": "rgba(0, 0, 0, 0.06)",
            "200": "rgba(0, 0, 0, 0.08)",
            "300": "rgba(0, 0, 0, 0.16)",
            "400": "rgba(0, 0, 0, 0.24)",
            "500": "rgba(0, 0, 0, 0.36)",
            "600": "rgba(0, 0, 0, 0.48)",
            "700": "rgba(0, 0, 0, 0.64)",
            "800": "rgba(0, 0, 0, 0.80)",
            "900": "rgba(0, 0, 0, 0.92)"
        },
        "gray": {
            "50": "#F7FAFC",
            "100": "#EDF2F7",
            "200": "#E2E8F0",
            "300": "#CBD5E0",
            "400": "#A0AEC0",
            "500": "#718096",
            "600": "#4A5568",
            "700": "#2D3748",
            "800": "#1A202C",
            "900": "#171923"
        },
        "red": {
            "50": "#FFF5F5",
            "100": "#FED7D7",
            "200": "#FEB2B2",
            "300": "#FC8181",
            "400": "#F56565",
            "500": "#E53E3E",
            "600": "#C53030",
            "700": "#9B2C2C",
            "800": "#822727",
            "900": "#63171B"
        },
        "orange": {
            "50": "#FFFAF0",
            "100": "#FEEBC8",
            "200": "#FBD38D",
            "300": "#F6AD55",
            "400": "#ED8936",
            "500": "#DD6B20",
            "600": "#C05621",
            "700": "#9C4221",
            "800": "#7B341E",
            "900": "#652B19"
        },
        "yellow": {
            "50": "#FFFFF0",
            "100": "#FEFCBF",
            "200": "#FAF089",
            "300": "#F6E05E",
            "400": "#ECC94B",
            "500": "#D69E2E",
            "600": "#B7791F",
            "700": "#975A16",
            "800": "#744210",
            "900": "#5F370E"
        },
        "green": {
            "50": "#F0FFF4",
            "100": "#C6F6D5",
            "200": "#9AE6B4",
            "300": "#68D391",
            "400": "#48BB78",
            "500": "#38A169",
            "600": "#2F855A",
            "700": "#276749",
            "800": "#22543D",
            "900": "#1C4532"
        },
        "teal": {
            "50": "#E6FFFA",
            "100": "#B2F5EA",
            "200": "#81E6D9",
            "300": "#4FD1C5",
            "400": "#38B2AC",
            "500": "#319795",
            "600": "#2C7A7B",
            "700": "#285E61",
            "800": "#234E52",
            "900": "#1D4044"
        },
        "blue": {
            "50": "#ebf8ff",
            "100": "#bee3f8",
            "200": "#90cdf4",
            "300": "#63b3ed",
            "400": "#4299e1",
            "500": "#3182ce",
            "600": "#2b6cb0",
            "700": "#2c5282",
            "800": "#2a4365",
            "900": "#1A365D"
        },
        "cyan": {
            "50": "#EDFDFD",
            "100": "#C4F1F9",
            "200": "#9DECF9",
            "300": "#76E4F7",
            "400": "#0BC5EA",
            "500": "#00B5D8",
            "600": "#00A3C4",
            "700": "#0987A0",
            "800": "#086F83",
            "900": "#065666"
        },
        "purple": {
            "50": "#FAF5FF",
            "100": "#E9D8FD",
            "200": "#D6BCFA",
            "300": "#B794F4",
            "400": "#9F7AEA",
            "500": "#805AD5",
            "600": "#6B46C1",
            "700": "#553C9A",
            "800": "#44337A",
            "900": "#322659"
        },
        "pink": {
            "50": "#FFF5F7",
            "100": "#FED7E2",
            "200": "#FBB6CE",
            "300": "#F687B3",
            "400": "#ED64A6",
            "500": "#D53F8C",
            "600": "#B83280",
            "700": "#97266D",
            "800": "#702459",
            "900": "#521B41"
        },
        "linkedin": {
            "50": "#E8F4F9",
            "100": "#CFEDFB",
            "200": "#9BDAF3",
            "300": "#68C7EC",
            "400": "#34B3E4",
            "500": "#00A0DC",
            "600": "#008CC9",
            "700": "#0077B5",
            "800": "#005E93",
            "900": "#004471"
        },
        "facebook": {
            "50": "#E8F4F9",
            "100": "#D9DEE9",
            "200": "#B7C2DA",
            "300": "#6482C0",
            "400": "#4267B2",
            "500": "#385898",
            "600": "#314E89",
            "700": "#29487D",
            "800": "#223B67",
            "900": "#1E355B"
        },
        "messenger": {
            "50": "#D0E6FF",
            "100": "#B9DAFF",
            "200": "#A2CDFF",
            "300": "#7AB8FF",
            "400": "#2E90FF",
            "500": "#0078FF",
            "600": "#0063D1",
            "700": "#0052AC",
            "800": "#003C7E",
            "900": "#002C5C"
        },
        "whatsapp": {
            "50": "#dffeec",
            "100": "#b9f5d0",
            "200": "#90edb3",
            "300": "#65e495",
            "400": "#3cdd78",
            "500": "#22c35e",
            "600": "#179848",
            "700": "#0c6c33",
            "800": "#01421c",
            "900": "#001803"
        },
        "twitter": {
            "50": "#E5F4FD",
            "100": "#C8E9FB",
            "200": "#A8DCFA",
            "300": "#83CDF7",
            "400": "#57BBF5",
            "500": "#1DA1F2",
            "600": "#1A94DA",
            "700": "#1681BF",
            "800": "#136B9E",
            "900": "#0D4D71"
        },
        "telegram": {
            "50": "#E3F2F9",
            "100": "#C5E4F3",
            "200": "#A2D4EC",
            "300": "#7AC1E4",
            "400": "#47A9DA",
            "500": "#0088CC",
            "600": "#007AB8",
            "700": "#006BA1",
            "800": "#005885",
            "900": "#003F5E"
        }
    },
    "letterSpacings": {
        "tighter": "-0.05em",
        "tight": "-0.025em",
        "normal": "0",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em"
    },
    "lineHeights": {
        "3": ".75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "normal": "normal",
        "none": 1,
        "shorter": 1.25,
        "short": 1.375,
        "base": 1.5,
        "tall": 1.625,
        "taller": "2"
    },
    "fontWeights": {
        "hairline": 100,
        "thin": 200,
        "light": 300,
        "normal": 400,
        "medium": 500,
        "semibold": 600,
        "bold": 700,
        "extrabold": 800,
        "black": 900
    },
    "fonts": {
        "heading": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
        "body": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
        "mono": "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
    },
    "fontSizes": {
        "3xs": "0.45rem",
        "2xs": "0.625rem",
        "xs": "0.75rem",
        "sm": "0.875rem",
        "md": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem"
    },
    "sizes": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "12": "3rem",
        "14": "3.5rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "28": "7rem",
        "32": "8rem",
        "36": "9rem",
        "40": "10rem",
        "44": "11rem",
        "48": "12rem",
        "52": "13rem",
        "56": "14rem",
        "60": "15rem",
        "64": "16rem",
        "72": "18rem",
        "80": "20rem",
        "96": "24rem",
        "px": "1px",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "max": "max-content",
        "min": "min-content",
        "full": "100%",
        "3xs": "14rem",
        "2xs": "16rem",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "90rem",
        "prose": "60ch",
        "container": {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px"
        }
    },
    "shadows": {
        "xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "base": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "outline": "0 0 0 3px rgba(66, 153, 225, 0.6)",
        "inner": "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        "none": "none",
        "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
    },
    "space": {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "12": "3rem",
        "14": "3.5rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "28": "7rem",
        "32": "8rem",
        "36": "9rem",
        "40": "10rem",
        "44": "11rem",
        "48": "12rem",
        "52": "13rem",
        "56": "14rem",
        "60": "15rem",
        "64": "16rem",
        "72": "18rem",
        "80": "20rem",
        "96": "24rem",
        "px": "1px",
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem"
    },
    "borders": {
        "none": 0,
        "1px": "1px solid",
        "2px": "2px solid",
        "4px": "4px solid",
        "8px": "8px solid"
    },
    "transition": {
        "property": {
            "common": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
            "colors": "background-color, border-color, color, fill, stroke",
            "dimensions": "width, height",
            "position": "left, right, top, bottom",
            "background": "background-color, background-image, background-position"
        },
        "easing": {
            "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
            "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
            "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        "duration": {
            "ultra-fast": "50ms",
            "faster": "100ms",
            "fast": "150ms",
            "normal": "200ms",
            "slow": "300ms",
            "slower": "400ms",
            "ultra-slow": "500ms"
        }
    },
    "components": {
        "LoginBox": {
            "background": {
                "dark": "rgba(34,61,100,0.85)"
            }
        },
        "Accordion": {
            "parts": [
                "root",
                "container",
                "button",
                "panel",
                "icon"
            ],
            "baseStyle": {
                "container": {
                    "borderTopWidth": "1px",
                    "borderColor": "inherit",
                    "_last": {
                        "borderBottomWidth": "1px"
                    }
                },
                "button": {
                    "transitionProperty": "common",
                    "transitionDuration": "normal",
                    "fontSize": "md",
                    "_focusVisible": {
                        "boxShadow": "outline"
                    },
                    "_hover": {
                        "bg": "blackAlpha.50"
                    },
                    "_disabled": {
                        "opacity": 0.4,
                        "cursor": "not-allowed"
                    },
                    "px": "4",
                    "py": "2"
                },
                "panel": {
                    "pt": "2",
                    "px": "4",
                    "pb": "5"
                },
                "icon": {
                    "fontSize": "1.25em"
                }
            }
        },
        "Alert": {
            "parts": [
                "title",
                "description",
                "container",
                "icon",
                "spinner"
            ],
            "baseStyle": {
                "container": {
                    "bg": "var(--alert-bg)",
                    "px": "4",
                    "py": "3"
                },
                "title": {
                    "fontWeight": "bold",
                    "lineHeight": "6",
                    "marginEnd": "2"
                },
                "description": {
                    "lineHeight": "6"
                },
                "icon": {
                    "color": "var(--alert-fg)",
                    "flexShrink": 0,
                    "marginEnd": "3",
                    "w": "5",
                    "h": "6"
                },
                "spinner": {
                    "color": "var(--alert-fg)",
                    "flexShrink": 0,
                    "marginEnd": "3",
                    "w": "5",
                    "h": "5"
                }
            },
            "variants": {},
            "defaultProps": {
                "variant": "subtle",
                "colorScheme": "blue"
            }
        },
        "Avatar": {
            "parts": [
                "label",
                "badge",
                "container",
                "excessLabel",
                "group"
            ],
            "sizes": {
                "2xs": {
                    "container": {
                        "--avatar-size": "1rem",
                        "--avatar-font-size": "calc(1rem / 2.5)"
                    },
                    "excessLabel": {
                        "--avatar-size": "1rem",
                        "--avatar-font-size": "calc(1rem / 2.5)"
                    }
                },
                "xs": {
                    "container": {
                        "--avatar-size": "1.5rem",
                        "--avatar-font-size": "calc(1.5rem / 2.5)"
                    },
                    "excessLabel": {
                        "--avatar-size": "1.5rem",
                        "--avatar-font-size": "calc(1.5rem / 2.5)"
                    }
                },
                "sm": {
                    "container": {
                        "--avatar-size": "2rem",
                        "--avatar-font-size": "calc(2rem / 2.5)"
                    },
                    "excessLabel": {
                        "--avatar-size": "2rem",
                        "--avatar-font-size": "calc(2rem / 2.5)"
                    }
                },
                "md": {
                    "container": {
                        "--avatar-size": "3rem",
                        "--avatar-font-size": "calc(3rem / 2.5)"
                    },
                    "excessLabel": {
                        "--avatar-size": "3rem",
                        "--avatar-font-size": "calc(3rem / 2.5)"
                    }
                },
                "lg": {
                    "container": {
                        "--avatar-size": "4rem",
                        "--avatar-font-size": "calc(4rem / 2.5)"
                    },
                    "excessLabel": {
                        "--avatar-size": "4rem",
                        "--avatar-font-size": "calc(4rem / 2.5)"
                    }
                },
                "xl": {
                    "container": {
                        "--avatar-size": "6rem",
                        "--avatar-font-size": "calc(6rem / 2.5)"
                    },
                    "excessLabel": {
                        "--avatar-size": "6rem",
                        "--avatar-font-size": "calc(6rem / 2.5)"
                    }
                },
                "2xl": {
                    "container": {
                        "--avatar-size": "8rem",
                        "--avatar-font-size": "calc(8rem / 2.5)"
                    },
                    "excessLabel": {
                        "--avatar-size": "8rem",
                        "--avatar-font-size": "calc(8rem / 2.5)"
                    }
                },
                "full": {
                    "container": {
                        "--avatar-size": "100%",
                        "--avatar-font-size": "calc(100% / 2.5)"
                    },
                    "excessLabel": {
                        "--avatar-size": "100%",
                        "--avatar-font-size": "calc(100% / 2.5)"
                    }
                }
            },
            "defaultProps": {
                "size": "md"
            }
        },
        "Badge": {
            "baseStyle": {
                "px": 1,
                "textTransform": "uppercase",
                "fontSize": "xs",
                "borderRadius": "sm",
                "fontWeight": "bold",
                "bg": "var(--badge-bg)",
                "color": "var(--badge-color)",
                "boxShadow": "var(--badge-shadow)"
            },
            "variants": {},
            "defaultProps": {
                "variant": "subtle",
                "colorScheme": "gray"
            }
        },
        "Breadcrumb": {
            "parts": [
                "link",
                "item",
                "container",
                "separator"
            ],
            "baseStyle": {
                "link": {
                    "transitionProperty": "common",
                    "transitionDuration": "fast",
                    "transitionTimingFunction": "ease-out",
                    "outline": "none",
                    "color": "inherit",
                    "textDecoration": "var(--breadcrumb-link-decor)",
                    "--breadcrumb-link-decor": "none",
                    "&:not([aria-current=page])": {
                        "cursor": "pointer",
                        "_hover": {
                            "--breadcrumb-link-decor": "underline"
                        },
                        "_focusVisible": {
                            "boxShadow": "outline"
                        }
                    }
                }
            }
        },
        "Button": {
            "baseStyle": {
                "lineHeight": "1.2",
                "borderRadius": "md",
                "fontWeight": "semibold",
                "transitionProperty": "common",
                "transitionDuration": "normal",
                "_focusVisible": {
                    "boxShadow": "outline"
                },
                "_disabled": {
                    "opacity": 0.4,
                    "cursor": "not-allowed",
                    "boxShadow": "none"
                },
                "_hover": {
                    "_disabled": {
                        "bg": "initial"
                    }
                }
            },
            "variants": {
                "unstyled": {
                    "bg": "none",
                    "color": "inherit",
                    "display": "inline",
                    "lineHeight": "inherit",
                    "m": "0",
                    "p": "0"
                }
            },
            "sizes": {
                "lg": {
                    "h": "12",
                    "minW": "12",
                    "fontSize": "lg",
                    "px": "6"
                },
                "md": {
                    "h": "10",
                    "minW": "10",
                    "fontSize": "md",
                    "px": "4"
                },
                "sm": {
                    "h": "8",
                    "minW": "8",
                    "fontSize": "sm",
                    "px": "3"
                },
                "xs": {
                    "h": "6",
                    "minW": "6",
                    "fontSize": "xs",
                    "px": "2"
                }
            },
            "defaultProps": {
                "variant": "solid",
                "size": "md",
                "colorScheme": "gray"
            }
        },
        "Checkbox": {
            "parts": [
                "control",
                "icon",
                "container",
                "label"
            ],
            "sizes": {
                "sm": {
                    "control": {
                        "--checkbox-size": "sizes.3"
                    },
                    "label": {
                        "fontSize": "sm"
                    },
                    "icon": {
                        "fontSize": "3xs"
                    }
                },
                "md": {
                    "control": {
                        "--checkbox-size": "sizes.4"
                    },
                    "label": {
                        "fontSize": "md"
                    },
                    "icon": {
                        "fontSize": "2xs"
                    }
                },
                "lg": {
                    "control": {
                        "--checkbox-size": "sizes.5"
                    },
                    "label": {
                        "fontSize": "lg"
                    },
                    "icon": {
                        "fontSize": "2xs"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "colorScheme": "blue"
            }
        },
        "CloseButton": {
            "baseStyle": {
                "w": [
                    "var(--close-button-size)"
                ],
                "h": [
                    "var(--close-button-size)"
                ],
                "borderRadius": "md",
                "transitionProperty": "common",
                "transitionDuration": "normal",
                "_disabled": {
                    "opacity": 0.4,
                    "cursor": "not-allowed",
                    "boxShadow": "none"
                },
                "_hover": {
                    "--close-button-bg": "colors.blackAlpha.100",
                    "_dark": {
                        "--close-button-bg": "colors.whiteAlpha.100"
                    }
                },
                "_active": {
                    "--close-button-bg": "colors.blackAlpha.200",
                    "_dark": {
                        "--close-button-bg": "colors.whiteAlpha.200"
                    }
                },
                "_focusVisible": {
                    "boxShadow": "outline"
                },
                "bg": "var(--close-button-bg)"
            },
            "sizes": {
                "lg": {
                    "--close-button-size": "sizes.10",
                    "fontSize": "md"
                },
                "md": {
                    "--close-button-size": "sizes.8",
                    "fontSize": "xs"
                },
                "sm": {
                    "--close-button-size": "sizes.6",
                    "fontSize": "2xs"
                }
            },
            "defaultProps": {
                "size": "md"
            }
        },
        "Code": {
            "baseStyle": {
                "fontFamily": "mono",
                "fontSize": "sm",
                "px": "0.2em",
                "borderRadius": "sm",
                "bg": "var(--badge-bg)",
                "color": "var(--badge-color)",
                "boxShadow": "var(--badge-shadow)"
            },
            "variants": {},
            "defaultProps": {
                "variant": "subtle",
                "colorScheme": "gray"
            }
        },
        "Container": {
            "baseStyle": {
                "w": "100%",
                "mx": "auto",
                "maxW": "prose",
                "px": "4"
            }
        },
        "Divider": {
            "baseStyle": {
                "opacity": 0.6,
                "borderColor": "inherit"
            },
            "variants": {
                "solid": {
                    "borderStyle": "solid"
                },
                "dashed": {
                    "borderStyle": "dashed"
                }
            },
            "defaultProps": {
                "variant": "solid"
            }
        },
        "Drawer": {
            "parts": [
                "overlay",
                "dialogContainer",
                "dialog",
                "header",
                "closeButton",
                "body",
                "footer"
            ],
            "sizes": {
                "xs": {
                    "dialog": {
                        "maxW": "xs"
                    }
                },
                "sm": {
                    "dialog": {
                        "maxW": "md"
                    }
                },
                "md": {
                    "dialog": {
                        "maxW": "lg"
                    }
                },
                "lg": {
                    "dialog": {
                        "maxW": "2xl"
                    }
                },
                "xl": {
                    "dialog": {
                        "maxW": "4xl"
                    }
                },
                "full": {
                    "dialog": {
                        "maxW": "100vw",
                        "h": "100vh"
                    }
                }
            },
            "defaultProps": {
                "size": "xs"
            }
        },
        "Editable": {
            "parts": [
                "preview",
                "input",
                "textarea"
            ],
            "baseStyle": {
                "preview": {
                    "borderRadius": "md",
                    "py": "1",
                    "transitionProperty": "common",
                    "transitionDuration": "normal"
                },
                "input": {
                    "borderRadius": "md",
                    "py": "1",
                    "transitionProperty": "common",
                    "transitionDuration": "normal",
                    "width": "full",
                    "_focusVisible": {
                        "boxShadow": "outline"
                    },
                    "_placeholder": {
                        "opacity": 0.6
                    }
                },
                "textarea": {
                    "borderRadius": "md",
                    "py": "1",
                    "transitionProperty": "common",
                    "transitionDuration": "normal",
                    "width": "full",
                    "_focusVisible": {
                        "boxShadow": "outline"
                    },
                    "_placeholder": {
                        "opacity": 0.6
                    }
                }
            }
        },
        "Form": {
            "parts": [
                "container",
                "requiredIndicator",
                "helperText"
            ],
            "baseStyle": {
                "container": {
                    "width": "100%",
                    "position": "relative"
                },
                "requiredIndicator": {
                    "marginStart": "1",
                    "--form-control-color": "colors.red.500",
                    "_dark": {
                        "--form-control-color": "colors.red.300"
                    },
                    "color": "var(--form-control-color)"
                },
                "helperText": {
                    "mt": "2",
                    "--form-control-color": "colors.gray.600",
                    "_dark": {
                        "--form-control-color": "colors.whiteAlpha.600"
                    },
                    "color": "var(--form-control-color)",
                    "lineHeight": "normal",
                    "fontSize": "sm"
                }
            }
        },
        "FormError": {
            "parts": [
                "text",
                "icon"
            ],
            "baseStyle": {
                "text": {
                    "--form-error-color": "colors.red.500",
                    "_dark": {
                        "--form-error-color": "colors.red.300"
                    },
                    "color": "var(--form-error-color)",
                    "mt": "2",
                    "fontSize": "sm",
                    "lineHeight": "normal"
                },
                "icon": {
                    "marginEnd": "0.5em",
                    "--form-error-color": "colors.red.500",
                    "_dark": {
                        "--form-error-color": "colors.red.300"
                    },
                    "color": "var(--form-error-color)"
                }
            }
        },
        "FormLabel": {
            "baseStyle": {
                "fontSize": "md",
                "marginEnd": "3",
                "mb": "2",
                "fontWeight": "medium",
                "transitionProperty": "common",
                "transitionDuration": "normal",
                "opacity": 1,
                "_disabled": {
                    "opacity": 0.4
                }
            }
        },
        "Heading": {
            "baseStyle": {
                "fontFamily": "heading",
                "fontWeight": "bold"
            },
            "sizes": {
                "4xl": {
                    "fontSize": [
                        "6xl",
                        null,
                        "7xl"
                    ],
                    "lineHeight": 1
                },
                "3xl": {
                    "fontSize": [
                        "5xl",
                        null,
                        "6xl"
                    ],
                    "lineHeight": 1
                },
                "2xl": {
                    "fontSize": [
                        "4xl",
                        null,
                        "5xl"
                    ],
                    "lineHeight": [
                        1.2,
                        null,
                        1
                    ]
                },
                "xl": {
                    "fontSize": [
                        "3xl",
                        null,
                        "4xl"
                    ],
                    "lineHeight": [
                        1.33,
                        null,
                        1.2
                    ]
                },
                "lg": {
                    "fontSize": [
                        "2xl",
                        null,
                        "3xl"
                    ],
                    "lineHeight": [
                        1.33,
                        null,
                        1.2
                    ]
                },
                "md": {
                    "fontSize": "xl",
                    "lineHeight": 1.2
                },
                "sm": {
                    "fontSize": "md",
                    "lineHeight": 1.2
                },
                "xs": {
                    "fontSize": "sm",
                    "lineHeight": 1.2
                }
            },
            "defaultProps": {
                "size": "xl"
            }
        },
        "Input": {
            "parts": [
                "addon",
                "field",
                "element",
                "group"
            ],
            "baseStyle": {
                "addon": {
                    "height": "var(--input-height)",
                    "fontSize": "var(--input-font-size)",
                    "px": "var(--input-padding)",
                    "borderRadius": "var(--input-border-radius)"
                },
                "field": {
                    "width": "100%",
                    "height": "var(--input-height)",
                    "fontSize": "var(--input-font-size)",
                    "px": "var(--input-padding)",
                    "borderRadius": "var(--input-border-radius)",
                    "minWidth": 0,
                    "outline": 0,
                    "position": "relative",
                    "appearance": "none",
                    "transitionProperty": "common",
                    "transitionDuration": "normal",
                    "_disabled": {
                        "opacity": 0.4,
                        "cursor": "not-allowed"
                    }
                }
            },
            "sizes": {
                "lg": {
                    "field": {
                        "--input-font-size": "fontSizes.lg",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.12"
                    },
                    "group": {
                        "--input-font-size": "fontSizes.lg",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.12"
                    }
                },
                "md": {
                    "field": {
                        "--input-font-size": "fontSizes.md",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.10"
                    },
                    "group": {
                        "--input-font-size": "fontSizes.md",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.10"
                    }
                },
                "sm": {
                    "field": {
                        "--input-font-size": "fontSizes.sm",
                        "--input-padding": "space.3",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.8"
                    },
                    "group": {
                        "--input-font-size": "fontSizes.sm",
                        "--input-padding": "space.3",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.8"
                    }
                },
                "xs": {
                    "field": {
                        "--input-font-size": "fontSizes.xs",
                        "--input-padding": "space.2",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.6"
                    },
                    "group": {
                        "--input-font-size": "fontSizes.xs",
                        "--input-padding": "space.2",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.6"
                    }
                }
            },
            "variants": {
                "unstyled": {
                    "field": {
                        "bg": "transparent",
                        "px": "0",
                        "height": "auto"
                    },
                    "addon": {
                        "bg": "transparent",
                        "px": "0",
                        "height": "auto"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "variant": "outline"
            }
        },
        "Kbd": {
            "baseStyle": {
                "--kbd-bg": "colors.gray.100",
                "_dark": {
                    "--kbd-bg": "colors.whiteAlpha.100"
                },
                "bg": "var(--kbd-bg)",
                "borderRadius": "md",
                "borderWidth": "1px",
                "borderBottomWidth": "3px",
                "fontSize": "0.8em",
                "fontWeight": "bold",
                "lineHeight": "normal",
                "px": "0.4em",
                "whiteSpace": "nowrap"
            }
        },
        "Link": {
            "baseStyle": {
                "transitionProperty": "common",
                "transitionDuration": "fast",
                "transitionTimingFunction": "ease-out",
                "cursor": "pointer",
                "textDecoration": "none",
                "outline": "none",
                "color": "inherit",
                "_hover": {
                    "textDecoration": "underline"
                },
                "_focusVisible": {
                    "boxShadow": "outline"
                }
            }
        },
        "List": {
            "parts": [
                "container",
                "item",
                "icon"
            ],
            "baseStyle": {
                "icon": {
                    "marginEnd": "2",
                    "display": "inline",
                    "verticalAlign": "text-bottom"
                }
            }
        },
        "Menu": {
            "parts": [
                "button",
                "list",
                "item",
                "groupTitle",
                "icon",
                "command",
                "divider"
            ],
            "baseStyle": {
                "button": {
                    "transitionProperty": "common",
                    "transitionDuration": "normal"
                },
                "list": {
                    "--menu-bg": "#fff",
                    "--menu-shadow": "shadows.sm",
                    "_dark": {
                        "--menu-bg": "colors.gray.700",
                        "--menu-shadow": "shadows.dark-lg"
                    },
                    "color": "inherit",
                    "minW": "3xs",
                    "py": "2",
                    "zIndex": 1,
                    "borderRadius": "md",
                    "borderWidth": "1px",
                    "bg": "var(--menu-bg)",
                    "boxShadow": "var(--menu-shadow)"
                },
                "item": {
                    "py": "1.5",
                    "px": "3",
                    "transitionProperty": "background",
                    "transitionDuration": "ultra-fast",
                    "transitionTimingFunction": "ease-in",
                    "_focus": {
                        "--menu-bg": "colors.gray.100",
                        "_dark": {
                            "--menu-bg": "colors.whiteAlpha.100"
                        }
                    },
                    "_active": {
                        "--menu-bg": "colors.gray.200",
                        "_dark": {
                            "--menu-bg": "colors.whiteAlpha.200"
                        }
                    },
                    "_expanded": {
                        "--menu-bg": "colors.gray.100",
                        "_dark": {
                            "--menu-bg": "colors.whiteAlpha.100"
                        }
                    },
                    "_disabled": {
                        "opacity": 0.4,
                        "cursor": "not-allowed"
                    },
                    "bg": "var(--menu-bg)"
                },
                "groupTitle": {
                    "mx": 4,
                    "my": 2,
                    "fontWeight": "semibold",
                    "fontSize": "sm"
                },
                "icon": {
                    "display": "inline-flex",
                    "alignItems": "center",
                    "justifyContent": "center",
                    "flexShrink": 0
                },
                "command": {
                    "opacity": 0.6
                },
                "divider": {
                    "border": 0,
                    "borderBottom": "1px solid",
                    "borderColor": "inherit",
                    "my": "2",
                    "opacity": 0.6
                }
            }
        },
        "Modal": {
            "parts": [
                "overlay",
                "dialogContainer",
                "dialog",
                "header",
                "closeButton",
                "body",
                "footer"
            ],
            "sizes": {
                "xs": {
                    "dialog": {
                        "maxW": "xs"
                    }
                },
                "sm": {
                    "dialog": {
                        "maxW": "sm"
                    }
                },
                "md": {
                    "dialog": {
                        "maxW": "md"
                    }
                },
                "lg": {
                    "dialog": {
                        "maxW": "lg"
                    }
                },
                "xl": {
                    "dialog": {
                        "maxW": "xl"
                    }
                },
                "2xl": {
                    "dialog": {
                        "maxW": "2xl"
                    }
                },
                "3xl": {
                    "dialog": {
                        "maxW": "3xl"
                    }
                },
                "4xl": {
                    "dialog": {
                        "maxW": "4xl"
                    }
                },
                "5xl": {
                    "dialog": {
                        "maxW": "5xl"
                    }
                },
                "6xl": {
                    "dialog": {
                        "maxW": "6xl"
                    }
                },
                "full": {
                    "dialog": {
                        "maxW": "100vw",
                        "minH": "$100vh",
                        "my": "0",
                        "borderRadius": "0"
                    }
                }
            },
            "defaultProps": {
                "size": "md"
            }
        },
        "NumberInput": {
            "parts": [
                "root",
                "field",
                "stepperGroup",
                "stepper"
            ],
            "sizes": {
                "xs": {
                    "field": {
                        "--input-font-size": "fontSizes.xs",
                        "--input-padding": "space.2",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.6",
                        "paddingInlineEnd": "var(--number-input-input-padding)",
                        "verticalAlign": "top"
                    },
                    "stepper": {
                        "fontSize": "calc(1rem * 0.75)",
                        "_first": {
                            "borderTopEndRadius": "sm"
                        },
                        "_last": {
                            "borderBottomEndRadius": "sm",
                            "mt": "-1px",
                            "borderTopWidth": 1
                        }
                    }
                },
                "sm": {
                    "field": {
                        "--input-font-size": "fontSizes.sm",
                        "--input-padding": "space.3",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.8",
                        "paddingInlineEnd": "var(--number-input-input-padding)",
                        "verticalAlign": "top"
                    },
                    "stepper": {
                        "fontSize": "calc(1rem * 0.75)",
                        "_first": {
                            "borderTopEndRadius": "sm"
                        },
                        "_last": {
                            "borderBottomEndRadius": "sm",
                            "mt": "-1px",
                            "borderTopWidth": 1
                        }
                    }
                },
                "md": {
                    "field": {
                        "--input-font-size": "fontSizes.md",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.10",
                        "paddingInlineEnd": "var(--number-input-input-padding)",
                        "verticalAlign": "top"
                    },
                    "stepper": {
                        "fontSize": "calc(1rem * 0.75)",
                        "_first": {
                            "borderTopEndRadius": "md"
                        },
                        "_last": {
                            "borderBottomEndRadius": "md",
                            "mt": "-1px",
                            "borderTopWidth": 1
                        }
                    }
                },
                "lg": {
                    "field": {
                        "--input-font-size": "fontSizes.lg",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.12",
                        "paddingInlineEnd": "var(--number-input-input-padding)",
                        "verticalAlign": "top"
                    },
                    "stepper": {
                        "fontSize": "calc(1rem * 0.75)",
                        "_first": {
                            "borderTopEndRadius": "md"
                        },
                        "_last": {
                            "borderBottomEndRadius": "md",
                            "mt": "-1px",
                            "borderTopWidth": 1
                        }
                    }
                }
            },
            "variants": {
                "unstyled": {
                    "field": {
                        "bg": "transparent",
                        "px": "0",
                        "height": "auto"
                    },
                    "addon": {
                        "bg": "transparent",
                        "px": "0",
                        "height": "auto"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "variant": "outline"
            }
        },
        "PinInput": {
            "baseStyle": {
                "width": "100%",
                "height": "var(--input-height)",
                "fontSize": "var(--input-font-size)",
                "px": "var(--input-padding)",
                "borderRadius": "var(--input-border-radius)",
                "minWidth": 0,
                "outline": 0,
                "position": "relative",
                "appearance": "none",
                "transitionProperty": "common",
                "transitionDuration": "normal",
                "_disabled": {
                    "opacity": 0.4,
                    "cursor": "not-allowed"
                },
                "textAlign": "center"
            },
            "sizes": {
                "lg": {
                    "fontSize": "lg",
                    "w": 12,
                    "h": 12,
                    "borderRadius": "md"
                },
                "md": {
                    "fontSize": "md",
                    "w": 10,
                    "h": 10,
                    "borderRadius": "md"
                },
                "sm": {
                    "fontSize": "sm",
                    "w": 8,
                    "h": 8,
                    "borderRadius": "sm"
                },
                "xs": {
                    "fontSize": "xs",
                    "w": 6,
                    "h": 6,
                    "borderRadius": "sm"
                }
            },
            "variants": {
                "unstyled": {
                    "bg": "transparent",
                    "px": "0",
                    "height": "auto"
                }
            },
            "defaultProps": {
                "size": "md",
                "variant": "outline"
            }
        },
        "Popover": {
            "parts": [
                "content",
                "header",
                "body",
                "footer",
                "popper",
                "arrow",
                "closeButton"
            ],
            "baseStyle": {
                "popper": {
                    "zIndex": 10
                },
                "content": {
                    "--popper-bg": "colors.white",
                    "bg": "var(--popper-bg)",
                    "--popper-arrow-bg": "var(--popper-bg)",
                    "--popper-arrow-shadow-color": "colors.gray.200",
                    "_dark": {
                        "--popper-bg": "colors.gray.700",
                        "--popper-arrow-shadow-color": "colors.whiteAlpha.300"
                    },
                    "width": "xs",
                    "border": "1px solid",
                    "borderColor": "inherit",
                    "borderRadius": "md",
                    "boxShadow": "sm",
                    "zIndex": "inherit",
                    "_focusVisible": {
                        "outline": 0,
                        "boxShadow": "outline"
                    }
                },
                "header": {
                    "px": 3,
                    "py": 2,
                    "borderBottomWidth": "1px"
                },
                "body": {
                    "px": 3,
                    "py": 2
                },
                "footer": {
                    "px": 3,
                    "py": 2,
                    "borderTopWidth": "1px"
                },
                "closeButton": {
                    "position": "absolute",
                    "borderRadius": "md",
                    "top": 1,
                    "insetEnd": 2,
                    "padding": 2
                }
            }
        },
        "Progress": {
            "parts": [
                "label",
                "filledTrack",
                "track"
            ],
            "sizes": {
                "xs": {
                    "track": {
                        "h": "1"
                    }
                },
                "sm": {
                    "track": {
                        "h": "2"
                    }
                },
                "md": {
                    "track": {
                        "h": "3"
                    }
                },
                "lg": {
                    "track": {
                        "h": "4"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "colorScheme": "blue"
            }
        },
        "Radio": {
            "parts": [
                "container",
                "control",
                "label"
            ],
            "sizes": {
                "md": {
                    "control": {
                        "w": "4",
                        "h": "4"
                    },
                    "label": {
                        "fontSize": "md"
                    }
                },
                "lg": {
                    "control": {
                        "w": "5",
                        "h": "5"
                    },
                    "label": {
                        "fontSize": "lg"
                    }
                },
                "sm": {
                    "control": {
                        "width": "3",
                        "height": "3"
                    },
                    "label": {
                        "fontSize": "sm"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "colorScheme": "blue"
            }
        },
        "Select": {
            "parts": [
                "field",
                "icon"
            ],
            "baseStyle": {
                "field": {
                    "width": "100%",
                    "height": "var(--input-height)",
                    "fontSize": "var(--input-font-size)",
                    "px": "var(--input-padding)",
                    "borderRadius": "var(--input-border-radius)",
                    "minWidth": 0,
                    "outline": 0,
                    "position": "relative",
                    "appearance": "none",
                    "transitionProperty": "common",
                    "transitionDuration": "normal",
                    "_disabled": {
                        "opacity": 0.4,
                        "cursor": "not-allowed"
                    },
                    "paddingBottom": "1px",
                    "lineHeight": "normal",
                    "bg": "var(--select-bg)",
                    "--select-bg": "colors.white",
                    "_dark": {
                        "--select-bg": "colors.gray.700"
                    },
                    "> option, > optgroup": {
                        "bg": "var(--select-bg)"
                    }
                },
                "icon": {
                    "width": "6",
                    "height": "100%",
                    "insetEnd": "2",
                    "position": "relative",
                    "color": "currentColor",
                    "fontSize": "xl",
                    "_disabled": {
                        "opacity": 0.5
                    }
                }
            },
            "sizes": {
                "lg": {
                    "field": {
                        "--input-font-size": "fontSizes.lg",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.12",
                        "paddingInlineEnd": "8"
                    },
                    "group": {
                        "--input-font-size": "fontSizes.lg",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.12"
                    }
                },
                "md": {
                    "field": {
                        "--input-font-size": "fontSizes.md",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.10",
                        "paddingInlineEnd": "8"
                    },
                    "group": {
                        "--input-font-size": "fontSizes.md",
                        "--input-padding": "space.4",
                        "--input-border-radius": "radii.md",
                        "--input-height": "sizes.10"
                    }
                },
                "sm": {
                    "field": {
                        "--input-font-size": "fontSizes.sm",
                        "--input-padding": "space.3",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.8",
                        "paddingInlineEnd": "8"
                    },
                    "group": {
                        "--input-font-size": "fontSizes.sm",
                        "--input-padding": "space.3",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.8"
                    }
                },
                "xs": {
                    "field": {
                        "--input-font-size": "fontSizes.xs",
                        "--input-padding": "space.2",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.6",
                        "paddingInlineEnd": "8"
                    },
                    "group": {
                        "--input-font-size": "fontSizes.xs",
                        "--input-padding": "space.2",
                        "--input-border-radius": "radii.sm",
                        "--input-height": "sizes.6"
                    },
                    "icon": {
                        "insetEnd": "1"
                    }
                }
            },
            "variants": {
                "unstyled": {
                    "field": {
                        "bg": "transparent",
                        "px": "0",
                        "height": "auto"
                    },
                    "addon": {
                        "bg": "transparent",
                        "px": "0",
                        "height": "auto"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "variant": "outline"
            }
        },
        "Skeleton": {
            "baseStyle": {
                "--skeleton-start-color": "colors.gray.100",
                "--skeleton-end-color": "colors.gray.400",
                "_dark": {
                    "--skeleton-start-color": "colors.gray.800",
                    "--skeleton-end-color": "colors.gray.600"
                },
                "background": "var(--skeleton-start-color)",
                "borderColor": "var(--skeleton-end-color)",
                "opacity": 0.7,
                "borderRadius": "sm"
            }
        },
        "SkipLink": {
            "baseStyle": {
                "borderRadius": "md",
                "fontWeight": "semibold",
                "_focusVisible": {
                    "boxShadow": "outline",
                    "padding": "4",
                    "position": "fixed",
                    "top": "6",
                    "insetStart": "6",
                    "--skip-link-bg": "colors.white",
                    "_dark": {
                        "--skip-link-bg": "colors.gray.700"
                    },
                    "bg": "var(--skip-link-bg)"
                }
            }
        },
        "Slider": {
            "parts": [
                "container",
                "track",
                "thumb",
                "filledTrack",
                "mark"
            ],
            "sizes": {
                "lg": {
                    "container": {
                        "--slider-thumb-size": "sizes.4",
                        "--slider-track-size": "sizes.1"
                    }
                },
                "md": {
                    "container": {
                        "--slider-thumb-size": "sizes.3.5",
                        "--slider-track-size": "sizes.1"
                    }
                },
                "sm": {
                    "container": {
                        "--slider-thumb-size": "sizes.2.5",
                        "--slider-track-size": "sizes.0.5"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "colorScheme": "blue"
            }
        },
        "Spinner": {
            "baseStyle": {
                "width": [
                    "var(--spinner-size)"
                ],
                "height": [
                    "var(--spinner-size)"
                ]
            },
            "sizes": {
                "xs": {
                    "--spinner-size": "sizes.3"
                },
                "sm": {
                    "--spinner-size": "sizes.4"
                },
                "md": {
                    "--spinner-size": "sizes.6"
                },
                "lg": {
                    "--spinner-size": "sizes.8"
                },
                "xl": {
                    "--spinner-size": "sizes.12"
                }
            },
            "defaultProps": {
                "size": "md"
            }
        },
        "Stat": {
            "parts": [
                "container",
                "label",
                "helpText",
                "number",
                "icon"
            ],
            "baseStyle": {
                "container": {},
                "label": {
                    "fontWeight": "medium"
                },
                "helpText": {
                    "opacity": 0.8,
                    "marginBottom": "2"
                },
                "number": {
                    "verticalAlign": "baseline",
                    "fontWeight": "semibold"
                },
                "icon": {
                    "marginEnd": 1,
                    "w": "3.5",
                    "h": "3.5",
                    "verticalAlign": "middle"
                }
            },
            "sizes": {
                "md": {
                    "label": {
                        "fontSize": "sm"
                    },
                    "helpText": {
                        "fontSize": "sm"
                    },
                    "number": {
                        "fontSize": "2xl"
                    }
                }
            },
            "defaultProps": {
                "size": "md"
            }
        },
        "Switch": {
            "parts": [
                "container",
                "track",
                "thumb"
            ],
            "sizes": {
                "sm": {
                    "container": {
                        "--switch-track-width": "1.375rem",
                        "--switch-track-height": "sizes.3"
                    }
                },
                "md": {
                    "container": {
                        "--switch-track-width": "1.875rem",
                        "--switch-track-height": "sizes.4"
                    }
                },
                "lg": {
                    "container": {
                        "--switch-track-width": "2.875rem",
                        "--switch-track-height": "sizes.6"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "colorScheme": "blue"
            }
        },
        "Table": {
            "parts": [
                "table",
                "thead",
                "tbody",
                "tr",
                "th",
                "td",
                "tfoot",
                "caption"
            ],
            "baseStyle": {
                "table": {
                    "fontVariantNumeric": "lining-nums tabular-nums",
                    "borderCollapse": "collapse",
                    "width": "full"
                },
                "th": {
                    "fontFamily": "heading",
                    "fontWeight": "bold",
                    "textTransform": "uppercase",
                    "letterSpacing": "wider",
                    "textAlign": "start"
                },
                "td": {
                    "textAlign": "start"
                },
                "caption": {
                    "mt": 4,
                    "fontFamily": "heading",
                    "textAlign": "center",
                    "fontWeight": "medium"
                }
            },
            "variants": {
                "unstyled": {}
            },
            "sizes": {
                "sm": {
                    "th": {
                        "px": "4",
                        "py": "1",
                        "lineHeight": "4",
                        "fontSize": "xs"
                    },
                    "td": {
                        "px": "4",
                        "py": "2",
                        "fontSize": "sm",
                        "lineHeight": "4"
                    },
                    "caption": {
                        "px": "4",
                        "py": "2",
                        "fontSize": "xs"
                    }
                },
                "md": {
                    "th": {
                        "px": "6",
                        "py": "3",
                        "lineHeight": "4",
                        "fontSize": "xs"
                    },
                    "td": {
                        "px": "6",
                        "py": "4",
                        "lineHeight": "5"
                    },
                    "caption": {
                        "px": "6",
                        "py": "2",
                        "fontSize": "sm"
                    }
                },
                "lg": {
                    "th": {
                        "px": "8",
                        "py": "4",
                        "lineHeight": "5",
                        "fontSize": "sm"
                    },
                    "td": {
                        "px": "8",
                        "py": "5",
                        "lineHeight": "6"
                    },
                    "caption": {
                        "px": "6",
                        "py": "2",
                        "fontSize": "md"
                    }
                }
            },
            "defaultProps": {
                "variant": "simple",
                "size": "md",
                "colorScheme": "gray"
            }
        },
        "Tabs": {
            "parts": [
                "root",
                "tab",
                "tablist",
                "tabpanel",
                "tabpanels",
                "indicator"
            ],
            "sizes": {
                "sm": {
                    "tab": {
                        "py": 1,
                        "px": 4,
                        "fontSize": "sm"
                    }
                },
                "md": {
                    "tab": {
                        "fontSize": "md",
                        "py": 2,
                        "px": 4
                    }
                },
                "lg": {
                    "tab": {
                        "fontSize": "lg",
                        "py": 3,
                        "px": 4
                    }
                }
            },
            "variants": {
                "unstyled": {}
            },
            "defaultProps": {
                "size": "md",
                "variant": "line",
                "colorScheme": "blue"
            }
        },
        "Tag": {
            "parts": [
                "container",
                "label",
                "closeButton"
            ],
            "variants": {},
            "baseStyle": {
                "container": {
                    "fontWeight": "medium",
                    "lineHeight": 1.2,
                    "outline": 0,
                    "--tag-color": "var(--badge-color)",
                    "--tag-bg": "var(--badge-bg)",
                    "--tag-shadow": "var(--badge-shadow)",
                    "color": "var(--tag-color)",
                    "bg": "var(--tag-bg)",
                    "boxShadow": "var(--tag-shadow)",
                    "borderRadius": "md",
                    "minH": "var(--tag-min-height)",
                    "minW": "var(--tag-min-width)",
                    "fontSize": "var(--tag-font-size)",
                    "px": "var(--tag-padding-inline)",
                    "_focusVisible": {
                        "--tag-shadow": "shadows.outline"
                    }
                },
                "label": {
                    "lineHeight": 1.2,
                    "overflow": "visible"
                },
                "closeButton": {
                    "fontSize": "lg",
                    "w": "5",
                    "h": "5",
                    "transitionProperty": "common",
                    "transitionDuration": "normal",
                    "borderRadius": "full",
                    "marginStart": "1.5",
                    "marginEnd": "-1",
                    "opacity": 0.5,
                    "_disabled": {
                        "opacity": 0.4
                    },
                    "_focusVisible": {
                        "boxShadow": "outline",
                        "bg": "rgba(0, 0, 0, 0.14)"
                    },
                    "_hover": {
                        "opacity": 0.8
                    },
                    "_active": {
                        "opacity": 1
                    }
                }
            },
            "sizes": {
                "sm": {
                    "container": {
                        "--tag-min-height": "sizes.5",
                        "--tag-min-width": "sizes.5",
                        "--tag-font-size": "fontSizes.xs",
                        "--tag-padding-inline": "space.2"
                    },
                    "closeButton": {
                        "marginEnd": "-2px",
                        "marginStart": "0.35rem"
                    }
                },
                "md": {
                    "container": {
                        "--tag-min-height": "sizes.6",
                        "--tag-min-width": "sizes.6",
                        "--tag-font-size": "fontSizes.sm",
                        "--tag-padding-inline": "space.2"
                    }
                },
                "lg": {
                    "container": {
                        "--tag-min-height": "sizes.8",
                        "--tag-min-width": "sizes.8",
                        "--tag-font-size": "fontSizes.md",
                        "--tag-padding-inline": "space.3"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "variant": "subtle",
                "colorScheme": "gray"
            }
        },
        "Textarea": {
            "baseStyle": {
                "width": "100%",
                "height": "var(--input-height)",
                "fontSize": "var(--input-font-size)",
                "px": "var(--input-padding)",
                "borderRadius": "var(--input-border-radius)",
                "minWidth": 0,
                "outline": 0,
                "position": "relative",
                "appearance": "none",
                "transitionProperty": "common",
                "transitionDuration": "normal",
                "_disabled": {
                    "opacity": 0.4,
                    "cursor": "not-allowed"
                },
                "paddingY": "2",
                "minHeight": "20",
                "lineHeight": "short",
                "verticalAlign": "top"
            },
            "sizes": {
                "xs": {
                    "--input-font-size": "fontSizes.xs",
                    "--input-padding": "space.2",
                    "--input-border-radius": "radii.sm",
                    "--input-height": "sizes.6"
                },
                "sm": {
                    "--input-font-size": "fontSizes.sm",
                    "--input-padding": "space.3",
                    "--input-border-radius": "radii.sm",
                    "--input-height": "sizes.8"
                },
                "md": {
                    "--input-font-size": "fontSizes.md",
                    "--input-padding": "space.4",
                    "--input-border-radius": "radii.md",
                    "--input-height": "sizes.10"
                },
                "lg": {
                    "--input-font-size": "fontSizes.lg",
                    "--input-padding": "space.4",
                    "--input-border-radius": "radii.md",
                    "--input-height": "sizes.12"
                }
            },
            "variants": {
                "unstyled": {
                    "bg": "transparent",
                    "px": "0",
                    "height": "auto"
                }
            },
            "defaultProps": {
                "size": "md",
                "variant": "outline"
            }
        },
        "Tooltip": {
            "baseStyle": {
                "bg": "var(--tooltip-bg)",
                "color": "var(--tooltip-fg)",
                "--tooltip-bg": "colors.gray.700",
                "--tooltip-fg": "colors.whiteAlpha.900",
                "_dark": {
                    "--tooltip-bg": "colors.gray.300",
                    "--tooltip-fg": "colors.gray.900"
                },
                "--popper-arrow-bg": "var(--tooltip-bg)",
                "px": "2",
                "py": "0.5",
                "borderRadius": "sm",
                "fontWeight": "medium",
                "fontSize": "sm",
                "boxShadow": "md",
                "maxW": "xs",
                "zIndex": "tooltip"
            }
        },
        "Card": {
            "parts": [
                "container",
                "header",
                "body",
                "footer"
            ],
            "baseStyle": {
                "container": {
                    "--card-bg": "colors.chakra-body-bg",
                    "backgroundColor": "var(--card-bg)",
                    "boxShadow": "var(--card-shadow)",
                    "borderRadius": "var(--card-radius)",
                    "color": "chakra-body-text",
                    "borderWidth": "var(--card-border-width, 0)",
                    "borderColor": "var(--card-border-color)"
                },
                "body": {
                    "padding": "var(--card-padding)",
                    "flex": "1 1 0%"
                },
                "header": {
                    "padding": "var(--card-padding)"
                },
                "footer": {
                    "padding": "var(--card-padding)"
                }
            },
            "variants": {
                "elevated": {
                    "container": {
                        "--card-shadow": "shadows.base",
                        "_dark": {
                            "--card-bg": "colors.gray.700"
                        }
                    }
                },
                "outline": {
                    "container": {
                        "--card-border-width": "1px",
                        "--card-border-color": "colors.chakra-border-color"
                    }
                },
                "filled": {
                    "container": {
                        "--card-bg": "colors.chakra-subtle-bg"
                    }
                },
                "unstyled": {
                    "body": {
                        "--card-padding": 0
                    },
                    "header": {
                        "--card-padding": 0
                    },
                    "footer": {
                        "--card-padding": 0
                    }
                }
            },
            "sizes": {
                "sm": {
                    "container": {
                        "--card-radius": "radii.base",
                        "--card-padding": "space.3"
                    }
                },
                "md": {
                    "container": {
                        "--card-radius": "radii.md",
                        "--card-padding": "space.5"
                    }
                },
                "lg": {
                    "container": {
                        "--card-radius": "radii.xl",
                        "--card-padding": "space.7"
                    }
                }
            },
            "defaultProps": {
                "variant": "elevated",
                "size": "md"
            }
        },
        "Stepper": {
            "parts": [
                "stepper",
                "step",
                "title",
                "description",
                "indicator",
                "separator",
                "icon",
                "number"
            ],
            "sizes": {
                "xs": {
                    "stepper": {
                        "--stepper-indicator-size": "sizes.4",
                        "--stepper-icon-size": "sizes.3",
                        "--stepper-title-font-size": "fontSizes.xs",
                        "--stepper-description-font-size": "fontSizes.xs"
                    }
                },
                "sm": {
                    "stepper": {
                        "--stepper-indicator-size": "sizes.6",
                        "--stepper-icon-size": "sizes.4",
                        "--stepper-title-font-size": "fontSizes.sm",
                        "--stepper-description-font-size": "fontSizes.xs"
                    }
                },
                "md": {
                    "stepper": {
                        "--stepper-indicator-size": "sizes.8",
                        "--stepper-icon-size": "sizes.5",
                        "--stepper-title-font-size": "fontSizes.md",
                        "--stepper-description-font-size": "fontSizes.sm"
                    }
                },
                "lg": {
                    "stepper": {
                        "--stepper-indicator-size": "sizes.10",
                        "--stepper-icon-size": "sizes.6",
                        "--stepper-title-font-size": "fontSizes.lg",
                        "--stepper-description-font-size": "fontSizes.md"
                    }
                }
            },
            "defaultProps": {
                "size": "md",
                "colorScheme": "blue"
            }
        }
    },
    "styles": {
        "global": {
            "body": {
                "fontFamily": "body",
                "color": "chakra-body-text",
                "bg": "chakra-body-bg",
                "transitionProperty": "background-color",
                "transitionDuration": "normal",
                "lineHeight": "base"
            },
            "*::placeholder": {
                "color": "chakra-placeholder-color"
            },
            "*, *::before, &::after": {
                "borderColor": "chakra-border-color"
            }
        }
    },
    "config": {
        'useSystemColorMode': true,
        "initialColorMode": "system",
        "cssVarPrefix": "chakra"
    }
};

export default THEME_SETTINGS;
