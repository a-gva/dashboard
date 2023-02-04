export const leftBar = {
  userLogin: {
    name: 'ByeWind',
    image: 'byeWind.png',
  },
  favoritesRecently: {
    items: ['Overwiew', 'Projects'],
  },
  dashboards: {
    items: [
      {
        name: 'Default',
        image: 'default.svg',
      },
      {
        name: 'eCommerce',
        image: 'eCommerce.svg',
      },
      {
        name: 'Projects',
        image: 'projects.svg',
      },
      {
        name: 'Online Courses',
        image: 'onlineCourses.svg',
      },
    ],
  },
  pages: {
    items: [
      {
        name: 'User Profile',
        image: 'userProfile.png',
        subItems: [
          { name: 'Overwiew', isActive: false },
          { name: 'Projects', isActive: true },
          { name: 'Campaigns', isActive: false },
          { name: 'Documents', isActive: false },
          { name: 'Folowers', isActive: false },
        ],
      },
      {
        name: 'Account',
        image: 'account.png',
      },
      {
        name: 'Corporate',
        image: 'corporate.png',
      },
      {
        name: 'Blog',
        image: 'blog.png',
      },
    ],
  },
  footer: {
    name: 'Log Out',
    image: 'logOut.png',
  },
};
