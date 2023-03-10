import { styled } from '../../theme/stitches.config';

interface IData {
  logoImage: string;
  logoText: string;
}

export default function Footer({ data }: { data: IData }) {
  const { logoImage, logoText } = data;

  return (
    <FooterDiv>
      <LogoImage src={`/assets/brand/${logoImage}`} alt={logoImage} />
      <LogoText src={`/assets/brand/${logoText}`} alt={logoText} />
    </FooterDiv>
  );
}

const FooterDiv = styled('div', {
  display: 'none',
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  // border: ' blue 3px solid',

  '@xxl': {
    display: 'flex',

    width: '100%',
    height: '76px',
    marginTop: 'auto',
    gap: '8px',
  },

  // border: '1px solid red',
  // position at the bottom
  // flexBasis: 'auto',
});

const LogoImage = styled('img', {});
const LogoText = styled('img', {});
