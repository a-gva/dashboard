import { styled } from '@stitches/react';

export default function Pages({ data }) {
  const { items } = data;
  return <PagesDiv>Pages</PagesDiv>;
}

const PagesDiv = styled('div', {
  background: 'purple',
});
