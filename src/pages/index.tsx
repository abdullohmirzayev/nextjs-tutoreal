import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { Content, Hero, Sidebar } from 'src/components';
import { BlogsType } from 'src/interface/blogs.interface';
import { CategoryType } from 'src/interface/categories.interface';
import Layout from 'src/layout/layout';
import { BlogesService } from 'src/services/blog.services';

const IndexPage = ({ blogs, latestBlogs, categories }: HomePageProps) => {

	return (
		<Layout>
			<Hero blogs={blogs.slice(0, 3)} />
			<Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
				<Sidebar latestBlogs={latestBlogs} categories={categories} />
				<Content blogs={blogs} />
			</Box>
		</Layout>
	);
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
	const blogs = await BlogesService.getAllBlogs()
	const latestBlogs = await BlogesService.getLatestBlog()
	const categories = await BlogesService.getCategories()

	return {
		props: {
			blogs,
			latestBlogs,
			categories,
		}
	}
}

interface HomePageProps {
	blogs: BlogsType[];
	latestBlogs: BlogsType[];
	categories: CategoryType[];
}