import { Avatar, Box, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Sidebar } from "src/components";
import { BlogsType } from "src/interface/blogs.interface";
import Layout from "src/layout/layout";
import { BlogesService } from "src/services/blog.services";
import { format } from 'date-fns';
import { CategoryType } from "src/interface/categories.interface";
import { calculateEstimatedTimeToRead } from "src/helpers/time.formt";


const DetailedBlogsPage = ({
  blog,
  latestBlogs,
  categories,
}: DetailedBlogsPageProps) => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          padding: "20px",
        }}
      >
        <Box width={{ xs: "100%", md: "70%" }}>
          <Box
            sx={{
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 8px 16px rgba(255, 255, 255, .1)",
              position: 'relative',
              width: '100%',
              height: { xs: '30vh', md: '50vh' }
            }}
          >
            <Image src={blog?.image?.url} alt={blog?.title} fill style={{ objectFit: 'cover', borderRadius: '10px' }} />
          </Box>
          <Box display={'flex'} rowGap={'10px'} flexDirection={'column'}>
            <Typography variant="h3" marginTop={'20px'}>{blog?.title}</Typography>
            <Typography color={'gray'}>{blog.excerpt}</Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <Avatar alt={blog?.auther?.name} src={blog?.auther?.avatar?.url} />
              <Box>
                <Typography>{blog?.auther?.name}</Typography>
                <Box color={'gray'}>{format(new Date(blog?.createdAt), 'dd MMM, yyyy')} &#x2022; {calculateEstimatedTimeToRead(blog?.description?.text)}min read</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Sidebar latestBlogs={latestBlogs} categories={categories} />
      </Box>
    </Layout>
  );
};

export default DetailedBlogsPage;

export const getServerSideProps: GetServerSideProps<
  DetailedBlogsPageProps
> = async ({ query }) => {
  const blog = await BlogesService.getDetailedBlogs(query.slug as string);
  const latestBlogs = await BlogesService.getLatestBlog();
  const categories = await BlogesService.getCategories();

  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedBlogsPageProps {
  blog: BlogsType;
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}
