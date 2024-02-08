import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Content, Sidebar } from "src/components";
import { BlogsType } from "src/interface/blogs.interface";
import { CategoryType } from "src/interface/categories.interface";
import Layout from "src/layout/layout"
import SEO from "src/layout/seo/seo";
import { BlogesService } from "src/services/blog.services";

const CategoryDetailedPage = ({ blogs, latestBlogs, categories, }: DetailedCategoriesPageProps) => {
    const router = useRouter()
    return (
        <SEO metaTitle={`${router.query.slug}-category`}>
            <Layout>
                <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
                    <Sidebar latestBlogs={latestBlogs} categories={categories} />
                    <Content blogs={blogs} />
                </Box>
            </Layout>
        </SEO>
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