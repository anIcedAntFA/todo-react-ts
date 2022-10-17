import { Link, Stack, Typography } from '@mui/material';

import Tooltip from 'src/components/Tooltip';
import { ICONS_LIST } from './footer-config';
import { FOOTER_PATH } from 'src/routes';

export default function Footer() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Typography variant="body1">Copyright © 2022 - Built with</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          {ICONS_LIST.map((item, index) => (
            <Tooltip key={index} title={item.title} color={item.color}>
              <Link component="button" href={item.path} target="_blank">
                {item.icon}
              </Link>
            </Tooltip>
          ))}
          <Typography>by</Typography>
          <Link href={FOOTER_PATH.GITHUB_AUTHOR} target="_blank" underline="hover">
            ngockhoi96
          </Link>
        </Stack>
      </Stack>
      <Stack direction="column" alignItems="center">
        <Typography variant="body1">Find an issue with this app?</Typography>
        <Link href={FOOTER_PATH.GITHUB_PROJECT} target="_blank" underline="hover">
          Fix it on Github
        </Link>
      </Stack>
    </Stack>
  );
}
