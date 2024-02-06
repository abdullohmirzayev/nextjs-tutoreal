import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogesService = {
  async getAllBlogs() {
    const queary = gql`
      query GetBlogs {
        blogs {
          excerpt
          id
          slug
          title
          image {
            url
          }
          auther {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
        }
      }
    `;

    const result = await request(graphqlAPI, queary);
    return result;
  },
};
