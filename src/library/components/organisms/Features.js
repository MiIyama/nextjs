// Features.jsx
import { Grid } from '@mui/material';
import FeaturesItem from '@/library/components/molecules/FeaturesItem';
import Section from '@/library/components/atoms/Section';
import TwoColumnLayout from '@/library/layout/TwoColumnLayout';
import ContentBlock from '../molecules/ContentBlock';

const Features = ({ columns = 2, content }) => {
  const { items, featuresProps } = content;

  const FeaturesItems = items.map((item, index) => (
    <Grid item xs={12 / columns} key={index}>
      <FeaturesItem title={item.title} description={item.description} config={featuresProps} />
    </Grid>
  ));

  return (
    <Section>
      <TwoColumnLayout
        leftContent={
          <ContentBlock
            content={{
              ...content,
              title: { ...content.title, typography: 'display-lg-medium', component: 'h2' },
            }}
          />
        }
        rightContent={
          <Grid container spacing={4} sx={{ ml: 10 }}>
            {FeaturesItems}
          </Grid>
        }
        spacing={1}
        sx={{ mt: '32px' }}
      />

      <ContentBlock
        content={{
          ...content,
          title: { ...content.title, typography: 'display-lg-medium', component: 'h2' },
        }}
      />
      <Grid container spacing={4} sx={{ mt: 6 }}>
        {FeaturesItems}
      </Grid>
    </Section>
  );
};

export default Features;
