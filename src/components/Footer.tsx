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
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  height: '76px',
  width: '100%',
  marginTop: 'auto',
  // border: '1px solid red',
  // position at the bottom
  // flexBasis: 'auto',
});

const LogoImage = styled('img', {});
const LogoText = styled('img', {});
