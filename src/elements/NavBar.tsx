import { styled } from '@stitches/react';

import UserLoginDiv from '../components/leftBar/UserLogin';
import FavoritesRecently from '../components/leftBar/FavoritesRecently';
import Dashboards from '../components/leftBar/Dashboards';
import Pages from '../components/leftBar/Pages';
import Footer from '../components/leftBar/Footer';

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
