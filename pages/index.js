import Head from 'next/head';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>FJ Blog</title>
        <meta
          name='description'
          content='nextjs sample blog where I post about stuff'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: { posts: featuredPosts },
  };
}

export default HomePage;
