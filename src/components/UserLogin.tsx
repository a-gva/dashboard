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
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

const Name = styled('div', {
  // background: 'blue',
});

const Avatar = styled('img', {
  // background: 'blue',/
});
