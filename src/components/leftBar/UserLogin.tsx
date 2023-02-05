import { styled } from '@stitches/react';

export default function UserLogin({ data }) {
  const { name, image } = data;

  return (
    <UserLoginDiv>
      <Avatar src={`src/assets/${image}`} alt='user' />
      <Name>{name}</Name>
    </UserLoginDiv>
  );
}

const UserLoginDiv = styled('div', {
  display: 'flex',
  flexDirection: 'Row',
  gap: '10px',
  paddingBottom: '6px',
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
