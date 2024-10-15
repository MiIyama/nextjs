import { Meta } from '@/library/layout/Meta';
import { Banner } from '@/library/templates/Banner';
import { Footer } from '@/library/templates/Footer';
import { Hero } from '@/library/templates/Hero';
import { Sponsors } from '@/library/templates/Sponsors';
import { VerticalFeatures } from '@/library/templates/VerticalFeatures';
import { AppConfig } from '@/utils/AppConfig';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Sponsors />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
