import { styled } from '../theme/stitches.config';
import NavBar from '../components/NavBar';
import CenterArea from '../components/CenterArea';
import StatusBar from '../components/StatusBar';

export default function DashboardArea() {
  return (
    <DashboardDiv>
      <Dashboard>
        <NavBar />
        <CenterArea />
        <StatusBar />
      </Dashboard>
    </DashboardDiv>
  );
}

const DashboardDiv = styled('div', {
  display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  '@xxl': {
    alignItems: 'center',
  },
});

const Dashboard = styled('div', {
  display: 'flex',
  background: '#fff',
  borderRadius: '16px',
  fontSize: '14px',
  flexDirection: 'column',
  width: '100%',
  // border: '10px solid red',

  '@md': {
    maxWidth: '946px',
    // maxHeight: '1024px',
  },
  '@xxl': {
    flexDirection: 'row',
    border: 'none',
    maxWidth: '1440px',
    // maxHeight: '964px',
  },
});
