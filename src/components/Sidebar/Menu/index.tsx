import React, { FC } from 'react'
import { Link } from 'gatsby'
import styles from './index.module.scss'
import { Menu  } from '../../../types'
interface Props {
  menus: Menu[]
}
const MenuFC:FC<Props> = ({ menus }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menus.map((menu) => (
        <li className={styles['menu__list-item']} key={menu.path}>
          <Link
            to={menu.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default MenuFC
