import { styled } from '../theme/stitches.config';

import Activities from '../snippets/rightBar/Activities';
import Contacts from '../snippets/rightBar/Contacts';
import Notifications from '../snippets/rightBar/Notifications';

import { statusBar } from '../data/statusBar';
const { notifications, activities, contacts } = statusBar;

export default function StatusBar() {
  return (
    <RightBarArea>
      <RightBarDiv>
        <Notifications data={notifications} />
        <Activities data={activities} />
        <Contacts data={contacts} />
      </RightBarDiv>
    </RightBarArea>
  );
}

const RightBarArea = styled('div', {
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  // border: '3px solid orange',
});

const RightBarDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0 36px',
  // gap: '100px',
  // border: '3px solid orange',

  '@lg': {
    gap: '100px',
    flexDirection: 'row',
  },

  '@xxl': {
    flexDirection: 'column',
    margin: '20px',
    gap: '0',
  },
});
