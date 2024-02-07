import { request, gql } from "graphql-request";
import { BlogsType } from "src/interface/blogs.interface";
import { CategoryType } from "src/interface/categories.interface";

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
          createdAt
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
          description {
            text
          }
        }
      }
    `;

    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, queary);
    return result.blogs;
  },

  async getLatestBlog() {
    const query = gql`
      query GetLatestBlogs {
        blogs(last: 2) {
          id
          slug
          title
          createdAt
          image {
            url
          }
          description {
            text
          }
          auther {
            name
            avatar {
              url
            }
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query GetCategories {
        categories {
          slug
          label
        }
      }
    `;
    const result = await request<{ categories: CategoryType[] }>(
      graphqlAPI,
      query
    );
    return result.categories;
  },

  async getDetailedBlogs(slug: string) {
    const query = gql`
      query GetDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          excerpt
          id
          slug
          title
          createdAt
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
          description {
            text
          }
        }
      }
    `;

    const result = await request<{ blog: BlogsType }>(graphqlAPI, query, {
      slug,
    });
    return result.blog;
  },
};
