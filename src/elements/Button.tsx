import { styled } from '../theme/stitches.config';

export default function Button({ text }: { text: string }) {
  return (
    <ButtonDiv>
      <Text>{text}</Text>
    </ButtonDiv>
  );
}

const ButtonDiv = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Text = styled('p', {});
