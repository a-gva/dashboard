export const centerArea = {
  infoBar: {
    leftIcons: ['sideBar.svg', 'star.svg'],
    selected: {
      menu: 'Dashboards',
      item: 'Default',
    },
    rightIcons: ['sun.svg', 'clock.svg', 'bell.svg', 'sideBar.svg'],
  },
  actionArea: {
    menuItems: [
      { name: 'Overview', isActive: true },
      { name: 'Targets', isActive: false },
      { name: 'Budget', isActive: false },
      { name: 'Users', isActive: false },
      { name: 'Files', isActive: false },
      { name: 'Activity', isActive: false },
      { name: 'Settings', isActive: false },
    ],
    actions: ['+ Add User', 'Add Target'],
    headerText: 'Coffee detail page',
    specs: {
      status: {
        label: 'Status',
        value: 'In Progress / 51%',
      },
      totalTasks: {
        label: 'Total Tasks',
        value: '15 / 48',
      },
      dueDate: {
        label: 'Due Date',
        value: '29 Jan, 2022',
      },
      budgetSpent: {
        label: 'Budget Spent',
        value: '$15,000',
      },
    },
    logo: 'marvel.svg',
    avatarGroup: 'avatarGroup.svg',
  },
  blockArea: {
    outterText: 'Block',
    label: 'Project Spendings',
    list: [
      {
        manager: 'Koray Okumus',
        date: 'Jun 24, 2022',
        amount: '$942.00',
        status: 'In Progress',
        image: 'KorayOkumus.svg',
      },
      {
        manager: 'Natali Craig',
        date: 'Mar 10, 2022',
        amount: '$881.00',
        status: 'Rejected',
        image: 'NataliCraig.svg',
      },
      {
        manager: 'Olivia Rhye',
        date: 'Nov 10, 2022',
        amount: '$409.00',
        status: 'Competed',
        image: 'OliviaRhye.svg',
      },
      {
        manager: 'Orlando Diggs',
        date: 'Dec 20, 2022',
        amount: '$953.00',
        status: 'Approved',
        image: 'OrlandoDiggs.svg',
      },
      {
        manager: 'Katherine Moss',
        date: 'Jul 25, 2022',
        amount: '$907.00',
        status: 'Pending',
        image: 'KatherineMoss.svg',
      },
    ],
  },
};
