import { styled } from '@stitches/react';

export default function Footer({ data }) {
  const { logoImage, logoText } = data;

  return (
    <FooterDiv>
      <LogoImage src={`src/assets/${logoImage}`} alt={logoImage} />
      <LogoText src={`src/assets/${logoText}`} alt={logoText} />
    </FooterDiv>
  );
}

const FooterDiv = styled('div', {
  // background: 'pink',
});

const LogoImage = styled('img', {});
const LogoText = styled('img', {});
