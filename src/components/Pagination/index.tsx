// @flow strict
import React, { FC } from 'react'
import { Link } from 'gatsby'
import { PAGINATION } from '../../constants'
import styles from './index.module.scss'

interface Props {
  prevPagePath: string
  nextPagePath: string
  hasNextPage: boolean
  hasPrevPage: boolean
}

const Pagination:FC<Props> = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  const prevClassName = hasPrevPage ? 'pagination__prev-link' : 'pagination__prev-link pagination__prev-link--disable'
  const nextClassName = hasNextPage ? 'pagination__next-link' : 'pagination__next-link pagination__next-link--disable'

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className={prevClassName}>{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className={styles['pagination__next']}>
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className={nextClassName}>{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  )
}

export default Pagination
