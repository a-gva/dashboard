import { styled } from '../theme/stitches.config';

const Back = styled('div', {
  width: '170px',
  height: '32px',
  // padding: '0px 4px',
  backgroundColor: '#EBEDEE',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const Front = styled('div', {
  height: '100%',
  backgroundColor: '#C6C7F8',
  width: '51%',

  borderRadius: '0px',
  transition: 'width 0.25s ease-in-out',
});

const Text = styled('p', {
  fontSize: '18px',
  fontWeight: '600',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  whiteSpace: 'nowrap',
});

export default function ProgressBar() {
  return (
    <Back>
      <Front>
        <Text>In Progress / 51%</Text>
      </Front>
    </Back>
  );
}
