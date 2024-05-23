// Header.tsx

import React from 'react'

interface MenuItem {
  title: string
  link: string
  subMenu?: MenuItem[]
}

interface HeaderProps {
  logoSrc: string
  menuItems: MenuItem[]
}

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
  const hasSubMenu = item.subMenu && item.subMenu.length > 0

  return (
    <li className={hasSubMenu ? 'menu-item-has-children' : ''}>
      <a href={item.link}>{item.title}</a>
      {hasSubMenu && (
        <ul className="sub-menu">
          {item.subMenu?.map((subItem, index) => (
            <MenuItemComponent key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  )
}

const Header: React.FC<HeaderProps> = ({ logoSrc, menuItems }) => {
  return (
    <div className="header__sticky">
      <div className="header__area">
        <div className="container custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <a href="/">
                  <img src={logoSrc} alt="" />
                </a>
                <div className="responsive-menu"></div>
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-menu menu-responsive">
                <ul id="mobilemenu">
                  {menuItems.map((menuItem, index) => (
                    <MenuItemComponent key={index} item={menuItem} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="header__area-menubar-right-box">
              <div className="header__area-menubar-right-box-btn">
                <a className="theme-btn" href="contact">
                  Book Now<i className="fal fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
