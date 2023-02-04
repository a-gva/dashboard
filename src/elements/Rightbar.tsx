import { styled } from '@stitches/react';

export default function RightBar() {
  return <RightBarArea>Rightbar</RightBarArea>;
}

const RightBarArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  //   border: '3px solid orange',
  minWidth: '280px',
});
