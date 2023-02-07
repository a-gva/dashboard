import { styled } from '../../theme/stitches.config';

import arrow from '/assets/icons/arrowLineRight.svg';

interface IData {
  items: Array<object>;
  label: string;
}

export default function Pages({ data }: { data: IData }) {
  const { items, label } = data;

  return (
    <PagesDiv>
      <LabelDiv>
        <LabelItem>{label}</LabelItem>
      </LabelDiv>
      {items.map((item: any) => {
        return (
          <div key={item.name}>
            <ItemDiv>
              <LabelArrow src={arrow} />
              <ItemIcon src={`/assets/icons/${item.image}`} alt={item.image} />
              <ItemName>{item.name}</ItemName>
            </ItemDiv>
            {item.subItems &&
              item.subItems.map((subItem: any) => {
                return (
                  <SubItemName key={subItem.name}>{subItem.name}</SubItemName>
                );
              })}
          </div>
        );
      })}
    </PagesDiv>
  );
}

const PagesDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  width: '100%',
  // border: ' red 3px solid',
  paddingBottom: '20px',
  borderBottom: '1px solid #EBEEF3',

  '@xxl': {
    flexDirection: 'column',
    borderBottom: 'none',
    padding: '0 0 6px 0',
  },
});

const LabelDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',

  flexDirection: 'row',
  color: '#A0A3BD',
  fontSize: '14px',
  '@xxl': {
    padding: '24px 0 6px 0',
  },
});

const LabelArrow = styled('img', {});

const LabelItem = styled('p', {
  // background: 'blue',
});

const ItemDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  padding: '6px 0',
  gap: '6px',
});

const ItemIcon = styled('img', {});
const ItemName = styled('p', {});

const SubItemName = styled('p', {
  marginLeft: '50px',
  padding: '6px 0',
  display: ' none',
  '@xxl': {
    display: 'block',
  },
});
