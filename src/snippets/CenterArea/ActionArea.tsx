import { styled } from '../../theme/stitches.config';

import Separator from '../../elements/Separator';

import ProgressBar from '../../elements/ProgressBar';

interface IData {
  menuItems: {
    name: string;
    isActive: boolean;
  }[];
  actions: string[];
  headerText: string;
  status: {
    label: string;
    value: number;
  };
  specs: {
    totalTasks: {
      label: string;
      value: {
        current: number;
        total: number;
      };
    };
    dueDate: {
      label: string;
      value: string;
    };
    budgetSpent: {
      label: string;
      value: string;
    };
  };
  logo: string;
  avatarGroup: string;
}

export default function ActionArea({ data }: { data: IData }) {
  const { menuItems, actions, headerText, status, specs, logo, avatarGroup } =
    data;

  return (
    <ActionAreaDiv>
      <WorkableArea>
        <MenuDiv>
          <MenuItems>
            {menuItems.map((item) =>
              item.isActive ? (
                <Tab type='active' key={item.name}>
                  {item.name}
                </Tab>
              ) : (
                <Tab key={item.name}>{item.name}</Tab>
              )
            )}
          </MenuItems>
          <Actions>
            {actions.map((item) => (
              <Tab key={item}>{item}</Tab>
            ))}
          </Actions>
        </MenuDiv>
        <InfoArea>
          <InfoWorkableArea>
            <Block1>
              <Header>
                <h1>{headerText}</h1>
              </Header>
              <Content>
                <InfoDiv>
                  <Info>
                    <InfoLabel>{status.label}:</InfoLabel>
                    {status.value < 100 && (
                      // <ProgressBarDiv>
                      <ProgressBar />
                      // <InfoText>
                      // </InfoText>
                      // </ProgressBarDiv>
                    )}
                  </Info>
                  {Object.keys(specs).map((key) => {
                    if (typeof specs[key].value === 'object') {
                      return (
                        <Info key={key}>
                          <InfoLabel>{specs[key].label}:</InfoLabel>
                          <InfoText>
                            {specs[key].value.current}
                            <Separator />
                            {specs[key].value.total}
                          </InfoText>
                        </Info>
                      );
                    } else {
                      return (
                        <Info key={key}>
                          <InfoLabel>{specs[key].label}:</InfoLabel>
                          <InfoText>{specs[key].value}</InfoText>
                        </Info>
                      );
                    }
                  })}
                  {/* check if specs.value is an object */}
                </InfoDiv>
              </Content>
            </Block1>
            <IconsDiv>
              {/* <Icon src={}>{logo}</Icon> */}
              {/* <Icon>{avatarGroup}</Icon> */}
              <Icon key={logo} src={`/assets/brand/${logo}`} alt={logo} />
              <Icon
                key={avatarGroup}
                src={`/assets/users/${avatarGroup}`}
                alt={avatarGroup}
              />
            </IconsDiv>
          </InfoWorkableArea>
        </InfoArea>
      </WorkableArea>
    </ActionAreaDiv>
  );
}

const ActionAreaDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  //   background: '#7d5bb6',
  marginTop: '32px',
  //   border: '2px solid green',
});

const WorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  margin: '0px 30px 30px 30px',
  //   border: '2px solid blue',
});

const MenuDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  marginBottom: '24px',
  color: 'rgba(0, 0, 0, 0.4)',
  //   border: '2px solid red',
});

const MenuItems = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  //   border: '2px solid red',
});

const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 'auto',
  gap: '24px',
  //   width: '100%',
  //   border: '2px solid red',
});

const Tab = styled('p', {
  paddingBottom: '4px',
  variants: {
    type: {
      active: {
        color: '#1c1c1c',
        fontWeight: 'bold',
        borderBottom: '2px solid #1c1c1c',
      },
    },
  },
});

const InfoArea = styled('div', {
  display: 'flex',
  height: '144px',
  width: '100%',
  borderRadius: '16px',
  background: '#F7F9FB',
  //   padding: '24px',
  // border: '2px solid green',
});

const InfoWorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  margin: '24px',
  width: '100%',
  //   padding: '24px 24px',
  // border: '2px solid green',
});

const Block1 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  // background: 'yellow',
});

const Header = styled('div', {
  width: '100%',
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '16px',
  //   border: '2px solid red',
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  //   border: '2px solid red',
});

const InfoDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  // justifyItems: 'start',
  // justifySelf: 'start',
  width: '650px',
  height: '52px',
  // border: '2px solid orange',
});

const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '0 28px',
  borderRight: '1px solid #E5E5E5',
  gap: '8px',
  height: '100%',
  // border: '2px solid purple',

  '&:first-child': {
    // borderLeft: '10px solid #E5E5E5',
    padding: '0 28px 0 0',
  },
  '&:last-child': {
    borderRight: 'none',
  },
});

const InfoLabel = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  color: '#1C1C1C',
  fontSize: '14px',
  fontWeight: '400',
  whiteSpace: 'nowrap',

  // border: '2px solid purple',

  //   display: 'none',
});

const InfoText = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '18px',
  fontWeight: '600',
  whiteSpace: 'nowrap',

  // border: '2px solid orange',

  //   display: 'none',
});

const IconsDiv = styled('div', {
  //   width: '100%',
  marginLeft: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'end',
  //   border: '2px solid purple',
});

const Icon = styled('img', {});
