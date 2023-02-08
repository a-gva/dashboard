import { styled } from '../../theme/stitches.config';
import { Link } from 'react-router-dom';

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
      <ItemDiv>
        <Link to='/calculator'>
          <LabelArrow src={arrow} />
          <ItemIcon src='/assets/calculator/calculator.svg' alt='Calculator' />
          <ItemName>Calculator</ItemName>
        </Link>
      </ItemDiv>
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
  // border: '1px solid red',
  '@xxl': {
    padding: '24px 0 6px 0',
  },
});

const LabelArrow = styled('img', {});

const LabelItem = styled('p', {
  // border: '1px solid red',
  // background: 'blue',
});

const ItemDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  padding: '6px 0',
  gap: '6px',
  // border: '1px solid green',

  // style <a> tag
  '& a': {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#000',
    // style image inside a
    '& img': {
      margin: '0 6px 0 0',
    },
  },

  // hover
  '&:hover': {
    background: '#cacaca6c',
    borderRadius: '8px',
    cursor: 'pointer',
  },
});

const ItemIcon = styled('img', {
  width: '20px',
});
const ItemName = styled('p', {});

const SubItemName = styled('p', {
  // marginLeft: '50px',
  padding: '6px 0 6px 50px',
  display: ' none',
  '@xxl': {
    display: 'block',
  },
  '&:hover': {
    background: '#cacaca6c',
    borderRadius: '8px',
    cursor: 'pointer',
  },
});
