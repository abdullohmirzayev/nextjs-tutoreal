import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { Content, Hero, Sidebar } from "src/components";
import { BlogsType } from "src/inertfaces/blogs-inertfaces";
import Layout from "src/layout/layout";
import { BlogesService } from "src/services/blog.services";

const IndexPage = ({ blogs }: HomePageProps) => {

  console.log(blogs);


  return (
    <Layout>
      <Hero />
      <Box sx={{ display: "flex", gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: "20px" }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {

  const blogs = await BlogesService.getAllBlogs()

  return {
    props: {
      blogs,
    }
  }
}

interface HomePageProps {
  blogs: BlogsType[]
}