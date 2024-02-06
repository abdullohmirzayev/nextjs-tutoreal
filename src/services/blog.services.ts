import { request, gql } from "graphql-request";
import { BlogsType } from "src/inertfaces/blogs-inertfaces";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogesService = {
  async getAllBlogs() {
    const query = gql`
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

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },
};
