import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { Content, Sidebar } from "src/components";
import { BlogsType } from "src/interface/blogs.interface";
import { CategoryType } from "src/interface/categories.interface";
import Layout from "src/layout/layout"
import { BlogesService } from "src/services/blog.services";

const CategoryDetailedPage = ({ blogs, latestBlogs, categories, }: DetailedCategoriesPageProps) => {
    return (
        <Layout>
            <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
                <Sidebar latestBlogs={latestBlogs} categories={categories} />
                <Content blogs={blogs} />
            </Box>
        </Layout>
    )
}

export default CategoryDetailedPage

export const getServerSideProps: GetServerSideProps<
    DetailedCategoriesPageProps
> = async ({ query }) => {
    const blogs = await BlogesService.getDetaieldCategoriesBlog(query.slug as string);
    const latestBlogs = await BlogesService.getLatestBlog();
    const categories = await BlogesService.getCategories();

    return {
        props: {
            blogs,
            latestBlogs,
            categories,
        },
    };
};

interface DetailedCategoriesPageProps {
    blogs: BlogsType[];
    latestBlogs: BlogsType[];
    categories: CategoryType[];
}