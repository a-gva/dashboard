import { styled } from '@stitches/react';

export default function CenterArea() {
  return <CenterAreaDiv>CenterArea</CenterAreaDiv>;
}

const CenterAreaDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderRight: '2px solid #EBEEF3',
  width: '946px',
  background: '$alexy',
});
