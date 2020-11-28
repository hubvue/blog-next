'use strict';

module.exports = {
  url: 'https://blog.cckim.cn',
  pathPrefix: '/',
  title: 'Blog by Kim',
  subtitle: 'The place Kim used to record his study and life.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 5, // 每页展示几篇文章
  googleAnalyticsId: 'UA-73379983-2',
  icon: '/static/favicon.ico',
  useKatex: false,
  menu: [
    {
      // label: 'Articles',
      label: '博客',
      path: '/'
    },
    {
      // label: 'About me',
      label: '关于我',
      path: '/pages/about'
    },
    {
      // label: 'Contact me',
      label: '联系我',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Kim',
    photo: '/photo.jpg',
    bio: 'The place Kim used to record his study and life.',
    contacts: {
      email: '1191340528@qq.com',
      facebook: '#',
      telegram: '',
      twitter: '#',
      github: 'hubvue',
      rss: '',
      vkontakte: '',
      linkedin: '',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: '#',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: '#',
    }
  }
};
