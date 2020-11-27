import { useStaticQuery, graphql } from 'gatsby';
import { AllMarkDownRemark } from '../types'

interface QueryType {
  allMarkdownRemark: AllMarkDownRemark
}

export const useTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery<QueryType>(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};