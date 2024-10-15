/* eslint-disable import/extensions */
import content from '@/content/content';
import { AppConfig } from '@/content/utils/AppConfig';
import { Meta } from '@/library/layout/Meta';
import Title from '@/library/components/atoms/Title';
import Subtitle from '@/library/components/atoms/Subtitle';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Title>{content.title}</Title>
    <Subtitle>{content.subtitle}</Subtitle>
  </div>
);

export default Base;
