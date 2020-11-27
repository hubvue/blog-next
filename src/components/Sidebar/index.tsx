import React, { FC } from 'react'
import Author from './Author'
import Contacts from './Contacts'
import Copyright from './Copyright'
import Menu from './Menu'
import styles from './index.scss'
import { useSiteMetadata } from '../../hooks'

interface Props {
  isIndex?: boolean
}
const Sidebar:FC<Props> = ({ isIndex }) => {
  const { author, copyright, menu } = useSiteMetadata()

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menus={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  )
}

export default Sidebar
