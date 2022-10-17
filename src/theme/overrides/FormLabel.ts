import { Components } from '@mui/material'

export default function FormLabel(): Components {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          fontWeight: 600,
        },
      },
    },
  }
}
