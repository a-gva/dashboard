import { styled } from '@stitches/react';

export default function FavoritesRecently({ data }) {
  const { items } = data;

  return (
    <FavoritesRecentlyDiv>
      {items.map((item: string) => {
        return <p key={item}>{item}</p>;
      })}
    </FavoritesRecentlyDiv>
  );
}

const FavoritesRecentlyDiv = styled('div', {
  // background: 'blue',
});
