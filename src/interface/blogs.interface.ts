export interface BlogsType {
  excerpt: string;
  id: string;
  slug: string;
  title: string;
  image: {
    url: string;
  };
  auther: {
    name: string;
    avatar: {
      url: string;
    };
  };
  category: {
    label: string;
    slug: string;   
  };
}
