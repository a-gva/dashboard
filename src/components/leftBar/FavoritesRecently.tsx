import { styled } from '@stitches/react';
import dot from '../../assets/icons/dot.svg';

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
  padding: '18px 0 6px 0',
  fontSize: '14px',
});

const LabelDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  color: '#A0A3BD',
  fontSize: '14px',
  gap: '20px',
  padding: '0 0 6px 0',
});

const LabelDot = styled('img', {});
const LabelText = styled('p', {});
const LabelItem = styled('p', {});
const ItemDiv = styled('div', {
  display: 'flex',
  padding: '6px 0',
  gap: '10px',
});
