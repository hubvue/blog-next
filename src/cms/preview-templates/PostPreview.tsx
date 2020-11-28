import React, { ComponentType }from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

const PostPreview:ComponentType<PreviewTemplateComponentProps> = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="post">
      <h1 className="post__title">{title}</h1>
      <div className="post__body">{body}</div>
    </div>
  );
};

export default PostPreview;
