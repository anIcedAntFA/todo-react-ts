import { Theme, Palette } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    high: Palette['primary'];
    medium: Palette['primary'];
    low: Palette['primary'];
    add: Palette['primary'];
    edit: Palette['primary'];
    save: Palette['primary'];
    delete: Palette['primary'];
    // 'delete-many': Palette['primary'];
    category: Palette['primary'];
  }
  interface PaletteOptions {
    high?: PaletteOptions['primary'];
    medium?: PaletteOptions['primary'];
    low?: PaletteOptions['primary'];
    add?: PaletteOptions['primary'];
    edit?: PaletteOptions['primary'];
    save?: PaletteOptions['primary'];
    delete?: PaletteOptions['primary'];
    // 'delete many'?: PaletteOptions['primary'];
    category?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    high: string;
    medium: string;
    low: string;
    add: string;
    edit: string;
    save: string;
    delete: string;
    pink: string;
    category: string;
  }
  interface SimplePaletteColorOptions {
    high?: string;
    medium?: string;
    low?: string;
    add?: string;
    edit?: string;
    save?: string;
    delete?: string;
    pink?: string;
    category?: string;
  }
}
