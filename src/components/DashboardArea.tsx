import React from 'react';
import { styled } from '@stitches/react';
import LeftBar from '../elements/LeftBar';
import CenterArea from '../elements/CenterArea';
import RightBar from '../elements/RightBar';

export default function DashboardArea() {
  return (
    <Dashboard>
      <LeftBar />
      <CenterArea />
      <RightBar />
    </Dashboard>
  );
}

const Dashboard = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  background: '#fff',
  //   border: '1px solid red',
  textAlign: 'center',
  maxWidth: '1440px',
  height: '1024px',
  borderRadius: '16px',
});
