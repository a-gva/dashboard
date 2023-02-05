export const leftBar = {
  label: [' Favorites', 'Recently'],
  userLogin: {
    name: 'ByeWind',
    image: 'byeWind.png',
  },
  favoritesRecently: {
    items: ['Overview', 'Projects'],
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
        image: 'userProfile.svg',
        subItems: [
          { name: 'Overview', isActive: false },
          { name: 'Projects', isActive: true },
          { name: 'Campaigns', isActive: false },
          { name: 'Documents', isActive: false },
          { name: 'Followers', isActive: false },
        ],
      },
      {
        name: 'Account',
        image: 'account.svg',
      },
      {
        name: 'Corporate',
        image: 'corporate.svg',
      },
      {
        name: 'Blog',
        image: 'blog.svg',
      },
      {
        name: 'Social',
        image: 'social.svg',
      },
    ],
  },
  footer: {
    logoImage: 'logoImage.svg',
    logoText: 'logoText.svg',
  },
};
