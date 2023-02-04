import { styled } from '@stitches/react';

export default function Footer({ data }) {
  const { name, image } = data;
  return <FooterDiv>Footer</FooterDiv>;
}

const FooterDiv = styled('div', {
  background: 'pink',
});
