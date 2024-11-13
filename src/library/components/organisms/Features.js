// Features.jsx
import { Grid } from '@mui/material';
import FeaturesItem from '@/library/components/molecules/FeaturesItem';
import Section from '@/library/components/atoms/Section';
import ColumnLayout from '@/library/layout/ColumnLayout';
import ContentBlock from '../molecules/ContentBlock';

const Features = ({ content }) => {
  const { items, featuresProps, title, subtitle, proportions = [12], itemsPerRow = 2 } = content;
  const halfItems = Math.ceil(items.length / 2);

  const FeaturesItems = items.map((item, index) => (
    <Grid item xs={12 / itemsPerRow} key={`feature-item-${index}`}>
      <FeaturesItem title={item.title} description={item.description} config={featuresProps} />
    </Grid>
  ));

  const ContentTitle = <ContentBlock key="content-block" content={{ ...content, title: { ...title, typography: 'display-lg-medium', component: 'h2' }, subtitle: { ...subtitle, typography: 'body-lg-regular', component: 'p' } }} />;

  const renderItemsInRows = (start, end) => (
    <Grid container spacing={1} key={`items-row-${start}`}>
      {FeaturesItems.slice(start, end)}
    </Grid>
  );

  let columnsContent;

  switch (proportions.length) {
    case 3:
      columnsContent = [renderItemsInRows(0, halfItems), ContentTitle, renderItemsInRows(halfItems, items.length)];
      break;

    case 2:
      columnsContent = [
        ContentTitle,
        <Grid container key="all-items" spacing={1}>
          {FeaturesItems}
        </Grid>,
      ];
      break;

    default:
      columnsContent = [
        <>
          {ContentTitle}
          <Grid container key="all-items" spacing={1}>
            {FeaturesItems}
          </Grid>
        </>,
      ];
      break;
  }

  return (
    <Section>
      <ColumnLayout content={columnsContent} spacing={1} proportions={proportions} sx={{ mt: '32px' }} columnSx={{ padding: '16px' }} />
    </Section>
  );
};

export default Features;
