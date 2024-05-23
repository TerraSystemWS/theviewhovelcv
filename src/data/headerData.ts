// headerData.ts

export const logoSrc = 'assets/img/logo.png'

export interface MenuItem {
  title: string
  link: string
  subMenu?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    title: 'Home',
    link: '/',
    subMenu: [
      // { title: 'Home 01', link: 'index.html' },
      // { title: 'Home 02', link: 'index-2.html' },
      // { title: 'Home 03', link: 'index-3.html' },
    ],
  },
  {
    title: 'Pages',
    link: '#',
    subMenu: [
      // { title: 'About', link: 'about.html' },
      // { title: 'Team', link: 'services-team.html' },
      // { title: 'Services Details', link: 'services-details.html' },
      // { title: 'Coming Soon', link: 'coming-soon.html' },
    ],
  },
  {
    title: 'Room',
    link: '#',
    subMenu: [
      // { title: 'Room Style', link: 'room-style.html' },
      // { title: 'Room Modern', link: 'room-modern.html' },
      // { title: 'Room List', link: 'room-list.html' },
      // { title: 'Room Details', link: 'room-details.html' },
    ],
  },
  {
    title: 'Blog',
    link: '#',
    subMenu: [
      // { title: 'Blog Grid', link: 'blog-grid.html' },
      // { title: 'Blog Standard', link: 'blog-standard.html' },
      // { title: 'Blog Details', link: 'blog-details.html' },
    ],
  },
  { title: 'Contact', link: 'contact' },
]
