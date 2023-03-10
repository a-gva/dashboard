import { styled } from '../theme/stitches.config';

import UserLoginDiv from '../snippets/leftBar/UserLogin';
import FavoritesRecently from '../snippets/leftBar/FavoritesRecently';
import Dashboards from '../snippets/leftBar/Dashboards';
import Pages from '../snippets/leftBar/Pages';
import Footer from '../snippets/leftBar/Footer';

import { navBar } from '../data/navBar';
const { userLogin, favoritesRecently, dashboards, pages, footer } = navBar;

export default function NavBar() {
  return (
    <LeftBarArea>
      <UserLoginDiv data={userLogin} />
      <FavoritesRecently data={favoritesRecently} />
      <Dashboards data={dashboards} />
      <Pages data={pages} />
      <Footer data={footer} />
    </LeftBarArea>
  );
}

const LeftBarArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  borderRight: '1px solid #EBEEF3',
  padding: '24px 24px 0px 24px',
  justifyContent: 'space-between',
  // border: 'green 5px solid',

  '@xxl': {
    padding: '24px 24px 0 24px',
    alignItems: 'none',
    flexDirection: 'column',
    width: '210px',
    // border: 'solid 5px red',
  },
});
