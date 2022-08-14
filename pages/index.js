import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React Framework for production',
      date: '2022-10-10',
    },
    {
      slug: 'getting-started-with-nextj2s',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React Framework for production',
      date: '2022-10-10',
    },
    {
      slug: 'getting-started-with-nextjs3',
      title: 'Getting Started With NextJS',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React Framework for production',
      date: '2022-10-10',
    },
  ];

  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
