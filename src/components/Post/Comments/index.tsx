// @flow strict
import React, { FC } from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import { useSiteMetadata } from '../../../hooks'
interface Props {
  postTitle: string
  postSlug: string
}

const Comments:FC<Props> = ({ postTitle, postSlug }) => {
  const { url, disqusShortname } = useSiteMetadata()

  if (!disqusShortname) {
    return null
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={postTitle}
      title={postTitle}
      url={url + postSlug}
    />
  )
}

export default Comments