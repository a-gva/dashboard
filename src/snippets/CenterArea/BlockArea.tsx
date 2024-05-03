import { styled } from '../../theme/stitches.config';

import SearchBar from '../../elements/SearchBar';

import threeDots from '/assets/icons/threeDots.svg';

interface IData {
  outterText: string;
  label: string;
  tableHeadings: string[];
  list: {
    manager: string;
    date: string;
    amount: string;
    status: string;
    image: string;
  }[];
}

export default function BlockArea({ data }: { data: IData }) {
  const { label, list, tableHeadings } = data;

  return (
    <BlockAreaDiv>
      <WorkableArea>
        {/* <OutterText>{outterText}</OutterText> */}
        <MainArea>
          <MainWorkableArea>
            <TopArea>
              <Label>{label}</Label>
              <ActionsDiv>
                <SearchBar />
                <Actions src={threeDots} alt={threeDots} />
              </ActionsDiv>
            </TopArea>
            <BottomArea>
              <Table>
                <TableBody>
                  <TableRow>
                    {tableHeadings.map((item) => (
                      <TableHead key={item}>{item}</TableHead>
                    ))}
                  </TableRow>
                  {list.map((item) => (
                    <TableRow key={item.manager}>
                      <TableData
                        type='manager'
                        // style={{ width: `${100 / tableHeadings.length}%` }}
                      >
                        <ImageIcon
                          key={item.image}
                          src={`/assets/users/named/${item.image}`}
                          alt={item.image}
                        />
                        <ManagerName>{item.manager}</ManagerName>
                      </TableData>
                      <TableData type='date'>{item.date}</TableData>
                      <TableData type='amount'>{item.amount}</TableData>

                      {item.status === 'In Progress' && (
                        <TableData status='inProgress'>
                          • {item.status}
                        </TableData>
                      )}
                      {item.status === 'Rejected' && (
                        <TableData status='rejected'>• {item.status}</TableData>
                      )}
                      {item.status === 'Completed' && (
                        <TableData status='completed'>
                          • {item.status}
                        </TableData>
                      )}
                      {item.status === 'Approved' && (
                        <TableData status='approved'>• {item.status}</TableData>
                      )}
                      {item.status === 'Pending' && (
                        <TableData status='pending'>• {item.status}</TableData>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </BottomArea>
          </MainWorkableArea>
        </MainArea>
      </WorkableArea>
    </BlockAreaDiv>
  );
}

const BlockAreaDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  //   background: '#7d5bb6',
  marginTop: '32px',
});

const WorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0px 30px 30px 30px',
  // border: '2px solid blue',
});

const MainArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  background: '#F7F9FB',
  borderRadius: '16px',
  // border: '2px solid blue',
});

const MainWorkableArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '24px',
  // border: '2px solid blue',
});

const TopArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  // border: '2px solid red',
  gap: '8px',
  '@md': {
    gap: '0',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const Label = styled('div', {
  fontWeight: 'bold',
  // border: '2px solid yellow',
});

const ActionsDiv = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'center',
  // flexDirection: 'row',
  gap: '24px',
  // border: '2px solid green',

  '@md': {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
});
const Actions = styled('img', {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 'auto',
  gap: '24px',
});
const BottomArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '24px',
});

// TABLE

const Table = styled('table', {
  // display: 'grid',
  width: '100%',
});
const TableBody = styled('tbody', {
  // display: 'grid',
  // width: '100%',
});

const TableRow = styled('tr', {
  fontSize: '12px',

  '@sm': {
    fontSize: '14px',
  },
});

const TableHead = styled('th', {
  textAlign: 'left',
  borderBottom: '1px solid #E5E5E5',
  padding: '20px 0',
  color: '#9FA2B4',
  width: '177px',
  '&:first-child': {
    // border: '10px solid #E5E5E5',
    width: '248px',
  },
  '&:last-child': {
    // border: '10px solid #E5E5E5',
    width: '171px',
  },
  // border: '1px solid red',
});

const TableData = styled('td', {
  padding: '11px 0',
  // border: '1px solid red',
  verticalAlign: 'middle',
  gap: '8px',
  variants: {
    type: {
      manager: {
        // border: '1px solid red',
      },
      date: {
        // border: '1px solid blue',
      },
      amount: {
        // border: '1px solid green',
      },
      status: {
        // border: '1px solid black',
      },
    },
    status: {
      inProgress: {
        color: '#8A8CD9',
      },
      rejected: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
      completed: {
        color: '#4AA785',
      },
      approved: {
        color: '#FFC555',
      },
      pending: {
        color: '#59A8D4',
      },
    },
  },
});

const ImageIcon = styled('img', {
  display: 'inline',
  verticalAlign: 'middle',
});
const ManagerName = styled('p', {
  display: 'inline',
  verticalAlign: 'middle',
  paddingLeft: '8px',
});
