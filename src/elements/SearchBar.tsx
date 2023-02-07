import { styled } from '@stitches/react';

import searchIcon from '/assets/icons/search.svg';
import shortcut from '/assets/icons/shortcut.svg';

export default function SearchBar() {
  return (
    <SearchBarArea>
      <SearchIcon src={searchIcon} alt={searchIcon} />
      <Input type='text' placeholder='Search' />
      <Shortcut src={shortcut} alt={shortcut} />
    </SearchBarArea>
  );
}

const SearchBarArea = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '160px',
  height: '28px',
  padding: '0 7.5px',
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: '8px',
});

const SearchIcon = styled('img', {
  display: 'flex',
  width: '14px',
});

const Input = styled('input', {
  display: 'flex',
  width: '120px',
  background: 'transparent',
  marginLeft: '5px',
  '&::placeholder': {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '12px',
  },
});

const Shortcut = styled('img', {
  width: '18px',
});
