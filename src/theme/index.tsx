import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading4: React.CSSProperties
    heading6: React.CSSProperties
    subtitle1: React.CSSProperties
    subtitle2: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    button: React.CSSProperties
    caption1: React.CSSProperties
    caption2: React.CSSProperties
    overline: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    heading4: React.CSSProperties
    heading6: React.CSSProperties
    subtitle1: React.CSSProperties
    subtitle2: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    button: React.CSSProperties
    caption1: React.CSSProperties
    caption2: React.CSSProperties
    overline: React.CSSProperties
  }

  interface Palette {
    structural: Palette['primary']
    greyColors: Palette['primary']
    textColor: Palette['primary']

  }

  interface PaletteOptions {
    structural?: PaletteOptions['primary']
    greyColors?: PaletteOptions['primary']
    textColor?: PaletteOptions['primary']

  }

  interface PaletteColor {
    success100?: string;
    failure100?:string;
    grey50?: string;
    grey500?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    white?: string;
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    color6?: string;
  }

  interface SimplePaletteColorOptions {
    success100?: string;
    failure100?:string
    grey50?: string;
    grey500?: string;
    highEmphasis?: string;
    mediumEmphasis?: string;
    white?: string;
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    color6?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading4: true
    heading6: true
    subtitle1: true
    subtitle2: true
    body1: true
    body2: true
    caption1: true
    caption2: true
    overline: true
  }
}

const theme = createTheme({
  spacing: [4, 8, 12, 16, 20, 24, 32],
  typography: {
    heading4: {
      fontSize: '40px',
      fontWeight: 500,
      lineHeight: '54px',
      textTransform: 'none',
    },
    heading6: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '34px',
      textTransform: 'none',
    },

    subtitle1: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '28px',
      textTransform: 'none',
    },

    subtitle2: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px',
      textTransform: 'none',
    },

    body1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22px',
      textTransform: 'none',
    },

    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '22px',
      textTransform: 'none',
    },
    button: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '42px',
      textTransform: 'none',
    },
    caption1: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16px',
      textTransform: 'none',
    },

    caption2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      textTransform: 'none',
    },
    overline: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '14px',
      textTransform: 'none',
    },
  },

  palette: {
    primary: {
      main: '#0052FF',
      success100:'#90EE90',
      failure100:'#FF7F7F'
    },
    text: {
      primary: '#373C38',
      secondary: '#656E66',
      disabled: '#94A196',
    },
    textColor: {
      main: '#000000',
      highEmphasis: '#343446',
      mediumEmphasis: '#7D7D89',
    },
    greyColors: {
      main: '#D6D6D6',
      grey50: '#D2D5D6',
      grey500: '#78082',
    },
    structural: {
      main: '#FFFFFF',
    },
  },
})

export default theme