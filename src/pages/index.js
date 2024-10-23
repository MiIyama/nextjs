import content from '@/content/content';

import AboutUs from '@/library/components/organisms/AboutUs';
import Hero from '@/library/components/organisms/Hero';

const Index = () => (
  <>
    <Hero content={content.hero} />
    <AboutUs content={content.AboutUs} />
  </>
);

export default Index;
