import { request, gql } from "graphql-request";
import { BlogsType } from "src/interface/blogs.interface";

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

    const result = await request<{blogs: BlogsType[]}>(graphqlAPI, queary);
    return result.blogs;
  },
};
