import React from 'react';
import { styled } from '@stitches/react';

export default function DashboardArea() {
  return (
    <Dashboard>
      <div>Div 1</div>
      <div>Div 2</div>
      <div>Div 3</div>
    </Dashboard>
  );
}

const Dashboard = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  border: '1px solid red',
  textAlign: 'center',
  width: '100%',
});
