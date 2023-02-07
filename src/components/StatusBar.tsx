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
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  width: '280px',
  // display: 'none',
  '@xxl': {
    border: '3px solid orange',
    flexDirection: 'row',
    maxWidth: '1440px',
    maxHeight: '1024px',
  },
});

const RightBarDiv = styled('div', {
  width: '240px',
  marginTop: '22px',
  // border: '3px solid orange',
});
