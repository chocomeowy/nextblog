import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/cat.jpg'
          alt='An Example image'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi</h1>
      <p>This is a sample blog made using nextjs</p>
    </section>
  );
};

export default Hero;
