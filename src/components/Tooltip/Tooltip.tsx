import { TooltipProps, Zoom } from '@mui/material';
import MuiTooltip from '@mui/material/Tooltip';
import { ReactElement } from 'react';

interface ITooltipProps extends TooltipProps {
  title: string;
  children: ReactElement;
  color?: string;
}

export default function Tooltip({ title, children, color, sx, ...passProps }: ITooltipProps) {
  return (
    <MuiTooltip
      arrow
      title={title}
      enterDelay={200}
      leaveDelay={200}
      TransitionComponent={Zoom}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: color,
            color: '#ffff',
            '& .MuiTooltip-arrow': {
              color,
            },
            ...sx,
          },
        },
      }}
      // sx={{
      //   backgroundColor: color,
      //   color: '#ffff',
      //   '& .MuiTooltip-arrow': {
      //     color,
      //   },
      //   ...sx,
      // }}
      {...passProps}
    >
      {children}
    </MuiTooltip>
  );
}
