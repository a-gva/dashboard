import { styled } from '@stitches/react';

export default function Pages({ data }) {
  const { items } = data;

  return (
    <PagesDiv>
      {items.map((item: any) => {
        return (
          <div key={item.name}>
            <ItemDiv>
              <ItemIcon src={`src/assets/${item.image}`} alt={item.image} />
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
  // background: 'purple',
});

const ItemDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});
const ItemIcon = styled('img', {});
const ItemName = styled('p', {});

const SubItemName = styled('p', {
  fontSize: '14px',
  marginLeft: '48px',
});
