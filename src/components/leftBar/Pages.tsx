import { styled } from '@stitches/react';
import arrow from '../../assets/icons/arrowLineRight.svg';

export default function Pages({ data }) {
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

              <ItemIcon
                src={`src/assets/icons/${item.image}`}
                alt={item.image}
              />
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
  padding: '0 0 6px 0',
  fontSize: '14px',
});

const LabelDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  color: '#A0A3BD',
  fontSize: '14px',
  padding: '24px 0 6px 0',
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
});
