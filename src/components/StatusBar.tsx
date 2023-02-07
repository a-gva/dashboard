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
  flexDirection: 'row',
  justifyItems: 'center',
  alignItems: 'center',
  // border: '3px solid orange',
  // display: 'none',
  '@xxl': {
    width: '280px',
    // border: '3px solid orange',
    // flexDirection: 'column',
    // maxWidth: '1440px',
    // maxHeight: '1024px',
  },
});

const RightBarDiv = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  margin: '0 36px',
  gap: '100px',

  // border: '3px solid black',
  '@xxl': {
    // margin: '22px 20px 20px 20px',
    margin: '20px',

    // marginTop: '22px',
    // width: '240px',
    gap: '0',

    flexDirection: 'column',
    // maxWidth: '1440px',
    // maxHeight: '1024px',
  },
});
