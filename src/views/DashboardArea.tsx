import { styled } from '../theme/stitches.config';
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
  background: '#fff',
  borderRadius: '16px',
  fontSize: '14px',
  // border: '10px solid red',
  flexDirection: 'column',
  width: '100%',
  '@md': {
    maxWidth: '90%',
    // maxHeight: '1024px',
  },
  '@xxl': {
    flexDirection: 'row',
    border: 'none',
    maxWidth: '1440px',
    maxHeight: '1024px',
  },
});
