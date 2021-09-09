import { AllMarkDownRemark } from '@/types';
import { useStaticQuery, graphql } from 'gatsby';

interface QueryType {
  allMarkdownRemark: AllMarkDownRemark
}
export const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery<QueryType>(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};
