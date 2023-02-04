import React from 'react';
import { styled } from '@stitches/react';

export default function LeftBar() {
  return <LeftBarArea>Leftbar</LeftBarArea>;
}

const LeftBarArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderRight: '2px solid #EBEEF3',
  minWidth: '212px',
});
