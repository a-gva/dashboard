import { styled } from '@stitches/react';

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
  borderRight: '1px solid #EBEEF3',
  width: '210px',
  padding: '24px 24px 0 24px',
  // color: 'white',
});
