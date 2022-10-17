import { Components } from '@mui/material'

export default function Chip(): Components {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  }
}
