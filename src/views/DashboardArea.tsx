import { styled } from '@stitches/react';
import NavBar from '../components/NavBar';
import CenterArea from '../components/CenterArea';
import StatusBar from '../components/StatusBar';

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
