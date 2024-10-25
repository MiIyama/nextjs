import content from '@/content/content';

import AboutUs from '@/library/components/organisms/AboutUs';
import Hero from '@/library/components/organisms/Hero';
import Features from '@/library/components/organisms/Features';

const Index = () => (
  <>
    <Hero content={content.hero} />
    <AboutUs content={content.AboutUs} />
    <Features content={content.Features} />
  </>
);

export default Index;
