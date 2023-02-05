import { styled } from '@stitches/react';
import NavBar from '../elements/NavBar';
import CenterArea from '../elements/CenterArea';
import StatusBar from '../elements/StatusBar';

export default function DashboardArea() {
  return (
    <Dashboard>
      <NavBar />
      <CenterArea />
      <StatusBar />
    </Dashboard>
  );
}

const Dashboard = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  background: '#fff',
  maxWidth: '1440px',
  height: '1024px',
  borderRadius: '16px',
  fontSize: '14px',
});
