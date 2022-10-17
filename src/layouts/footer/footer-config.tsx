import { FOOTER_PATH } from 'src/routes';
import {
  FirebaseLogoIcon,
  MuiLogoIcon,
  ReactLogoIcon,
  ReactQueryLogoIcon,
  ReduxLogoIcon,
  TypescriptLogoIcon,
} from 'src/components/Icons';

interface IIconsList {
  title: string;
  color: string;
  icon: JSX.Element;
  path: string;
}

export const ICONS_LIST: IIconsList[] = [
  {
    title: 'ReactJs',
    color: '#61DBFB',
    icon: <ReactLogoIcon />,
    path: FOOTER_PATH.REACTJS,
  },
  {
    title: 'Typescript',
    color: '#007acc',
    icon: <TypescriptLogoIcon />,
    path: FOOTER_PATH.TS,
  },
  {
    title: 'MaterialUI',
    color: '#007fff',
    icon: <MuiLogoIcon />,
    path: FOOTER_PATH.MUI,
  },
  {
    title: 'Redux',
    color: '#764abc',
    icon: <ReduxLogoIcon />,
    path: FOOTER_PATH.REDUX,
  },
  {
    title: 'React Query',
    color: '#ff4154',
    icon: <ReactQueryLogoIcon />,
    path: FOOTER_PATH.REACT_QUERY,
  },
  {
    title: 'Firebase',
    color: '#FFA611',
    icon: <FirebaseLogoIcon />,
    path: FOOTER_PATH.FIREBASE,
  },
];
