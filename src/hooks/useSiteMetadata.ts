import { SiteMetadata } from '../types';
import { useStaticQuery, graphql } from 'gatsby';

interface QueryType {
  site: {
    siteMetadata: SiteMetadata
  }
}
export const useSiteMetadata = () => {
  const { site } = useStaticQuery<QueryType>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
                soundcloud
                medium
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};