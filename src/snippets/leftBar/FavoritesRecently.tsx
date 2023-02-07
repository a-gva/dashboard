import { styled } from '../../theme/stitches.config';

import dot from '/assets/icons/dot.svg';

interface IData {
  items: Array<string>;
  label: Array<string>;
}

export default function FavoritesRecently({ data }: { data: IData }) {
  const { items, label } = data;

  return (
    <FavoritesRecentlyDiv>
      <LabelDiv>
        {label.map((label) => {
          return <LabelItem key={label}>{label}</LabelItem>;
        })}
      </LabelDiv>
      {items.map((item) => {
        return (
          <ItemDiv key={item}>
            <LabelDot src={dot} />
            <LabelText>{item}</LabelText>
          </ItemDiv>
        );
      })}
    </FavoritesRecentlyDiv>
  );
}

const FavoritesRecentlyDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  fontSize: '14px',
  // border: '1px solid orange',
  '@xxl': {
    flexDirection: 'column',
    padding: '18px 0 6px 0',
  },
});

const LabelDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  color: '#A0A3BD',
  fontSize: '14px',
  gap: '20px',
  '@xxl': {
    padding: '0 0 6px 0',
  },
});

const LabelDot = styled('img', {});
const LabelText = styled('p', {});
const LabelItem = styled('p', {});
const ItemDiv = styled('div', {
  display: 'flex',
  padding: '6px 0',
  gap: '10px',
});
