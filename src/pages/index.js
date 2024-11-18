import content from '@/content/content';
import PageBuilder from '@/library/utils/PageBuilder';
import FeaturesPlayground from '@/library/components/organisms/FeaturesPlayground';

const Index = () => (
  <>
    {' '}
    <FeaturesPlayground /> {/* Adiciona o playground abaixo do conteúdo principal */}
    <PageBuilder pageContent={content} />
  </>
);

export default Index;
