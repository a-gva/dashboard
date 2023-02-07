import { styled } from '../../theme/stitches.config';

interface IData {
  name: string;
  image: string;
}

export default function UserLogin({ data }: { data: IData }) {
  const { name, image } = data;

  return (
    <UserLoginDiv>
      <Avatar src={`/assets/${image}`} alt='user' />
      <Name>{name}</Name>
    </UserLoginDiv>
  );
}

const UserLoginDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'Row',
  gap: '10px',
  paddingBottom: '12px',
  '@xxl': {
    gap: '10px',
    paddingBottom: '6px',
  },
});

const Name = styled('p', {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#1C1C1C',
});

const Avatar = styled('img', {
  // background: 'blue',/
});
