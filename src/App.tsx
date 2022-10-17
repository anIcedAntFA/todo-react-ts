import { Container, Stack, styled } from '@mui/material';

import Filters from './container/Filters';
import TodoList from './container/TodoList';
import { Footer, Header } from './layouts';

export default function App() {
  return (
    <RootStyle>
      <ContainerStyle maxWidth="md">
        <Header />
        <Stack justifyContent="center" alignItems="" spacing={2}>
          <Filters />
          <TodoList />
        </Stack>
        <Footer />
      </ContainerStyle>
    </RootStyle>
  );
}

const RootStyle = styled(`div`)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  // padding: theme.spacing(12),
  // color: theme.palette.primary.main,
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '32px 24px',
  borderRadius: '8px',
  backgroundColor: '#ffff',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
})) as typeof Container;
