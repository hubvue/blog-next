import React, { ComponentType } from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

const PagePreview:ComponentType<PreviewTemplateComponentProps>  = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__body">{ body }</div>
    </div>
  );
};

export default PagePreview;
