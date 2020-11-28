import CMS from 'netlify-cms-app';
import PagePreview from './preview-templates/PagePreview';
import PostPreview from './preview-templates/PostPreview';

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('posts', PostPreview);
