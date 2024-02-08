import { BlogsType } from "src/interface/blogs.interface";
import { CategoryType } from "src/interface/categories.interface";

export interface SidebarProps {
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}
