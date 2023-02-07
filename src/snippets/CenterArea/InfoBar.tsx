import { styled } from '@stitches/react';

import SearchBar from '../../elements/SearchBar';

interface IData {
  leftIcons: string[];
  selected: { menu: string; item: string };
  rightIcons: string[];
}

export default function InfoBar({ data }: { data: IData }) {
  const { leftIcons, selected, rightIcons } = data;

  return (
    <InfoBarDiv>
      <WorkableArea>
        <LeftContent>
          <LeftIconDiv>
            {leftIcons.map((icon) => (
              <Icon key={icon} src={`/assets/icons/${icon}`} alt={icon} />
            ))}
          </LeftIconDiv>
          <SelectedDiv>
            <MenuText>{selected.menu}</MenuText>
            <Separator>/</Separator>
            <ItemText>{selected.item}</ItemText>
          </SelectedDiv>
        </LeftContent>

        <RightIconDiv>
          <SearchBar />

          {rightIcons.map((icon) => (
            <Icon key={icon} src={`/assets/icons/${icon}`} alt={icon} />
          ))}
        </RightIconDiv>
      </WorkableArea>
    </InfoBarDiv>
  );
}

const InfoBarDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  height: '72px',
  borderBottom: '1px solid #EBEEF3',
  //   background: '#9d3b3b',
  // border: '2px solid blue',
});

const WorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  margin: '0px 30px',
  padding: '26px 5px',
  // border: '2px solid green',
});

const LeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '100%',
  gap: '22px',
});

const LeftIconDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '18px',
  // border: '2px solid red',
});

const Icon = styled('img', {});

const SelectedDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  height: '100%',
  gap: '12px',
  color: 'rgba(0, 0, 0, 0.4)',
  // border: '2px solid blue',
});

const RightIconDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  height: '100%',
  gap: '18px',
  marginLeft: 'auto',
  // border: '2px solid red',
});

const MenuText = styled('p', {});
const Separator = styled('p', {});
const ItemText = styled('p', {
  color: 'rgba(0, 0, 0, 0.9)',
});
