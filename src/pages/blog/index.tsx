import { Box } from "@mui/material"
import { GetServerSideProps } from "next"
import { Content } from "src/components"
import { BlogsType } from "src/interface/blogs.interface"
import Layout from "src/layout/layout"
import { BlogesService } from "src/services/blog.services"

const BlogPage = ({ blogs }: BlogPageProps) => {
    return (
        <Layout>
            <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px', justifyContent: 'center' }}>
                <Content blogs={blogs} />
            </Box>
        </Layout>
    )
}

export default BlogPage

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
    const blogs = await BlogesService.getAllBlogs()

    return {
        props: { blogs }
    }
}

interface BlogPageProps {
    blogs: BlogsType[]
}