import React, { FC } from 'react';
import { Link } from 'gatsby';
import styles from './index.scss';
interface Props {
  tags: string[]
  tagSlugs: string[]
}

const Tags:FC<Props> = ({ tags, tagSlugs }) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li className={styles['tags__list-item']} key={tags[i]}>
          <Link to={slug} className={styles['tags__list-item-link']}>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Tags
