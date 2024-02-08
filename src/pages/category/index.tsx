import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { CategoryType } from "src/interface/categories.interface";
import Layout from "src/layout/layout";
import SEO from "src/layout/seo/seo";
import { BlogesService } from "src/services/blog.services";

const CategoryPage = ({ categories }: CategoryPageProps) => {
    const router = useRouter()
    return (
        <SEO metaTitle="All Categories">
            <Layout>
                <Box
                    height={{ xs: "30vh", md: "50vh" }}
                    width={{ xs: "100%", md: "80%" }}
                    marginX={"auto"}
                    sx={{
                        marginTop: "10vh",
                        backgroundColor: "black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        flexDirection: 'column',
                        rowGap: '10px'
                    }}
                >
                    <Typography variant="h3" fontFamily={"cursive"}>
                        All Categories
                    </Typography>
                    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
                        {categories.map(item => (
                            <Button onClick={() => router.push(`/category/${item.slug}`)} key={item.slug} sx={{ marginTop: '20px' }}>#{item.label}</Button>
                        ))}
                    </ButtonGroup>
                </Box>
            </Layout>
        </SEO>
    );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<
    CategoryPageProps
> = async () => {
    const categories = await BlogesService.getCategories();
    return {
        props: { categories },
    };
};

interface CategoryPageProps {
    categories: CategoryType[];
}
