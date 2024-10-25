import content from '@/content/content';

import AboutUs from '@/library/components/organisms/AboutUs';
import Hero from '@/library/components/organisms/Hero';
import FeaturesItem from '@/library/components/molecules/FeaturesItem';
import { Grid, Typography } from '@mui/material';

const TITLE = 'Features Item';
const DESCRIPTION = 'This is a description of the FeaturesItem component.';
const icon = false;
const Index = () => (
  <>
    <Hero content={content.hero} />
    <AboutUs content={content.AboutUs} />
    <Grid container spacing={4}>
      {/* Default */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Default</Typography>
        <FeaturesItem title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Default + Divider */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Default + Divider</Typography>
        <FeaturesItem withDivider title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Default + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Default + No Icon</Typography>
        <FeaturesItem icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Default + Divider + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Default + Divider + No Icon</Typography>
        <FeaturesItem withDivider icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Default + Centered */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Default + Centered</Typography>
        <FeaturesItem centerText title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Default + Centered + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Default + Centered + No Icon</Typography>
        <FeaturesItem centerText icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Highlighted */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Highlighted</Typography>
        <FeaturesItem variant="highlighted" title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Highlighted + Divider */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Highlighted + Divider</Typography>
        <FeaturesItem variant="highlighted" withDivider title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Highlighted + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Highlighted + No Icon</Typography>
        <FeaturesItem variant="highlighted" icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Highlighted + Divider + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Highlighted + Divider + No Icon</Typography>
        <FeaturesItem variant="highlighted" withDivider icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Highlighted + Centered */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Highlighted + Centered</Typography>
        <FeaturesItem variant="highlighted" centerText title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Highlighted + Centered + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Highlighted + Centered + No Icon</Typography>
        <FeaturesItem variant="highlighted" centerText icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Simple */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Simple</Typography>
        <FeaturesItem variant="simple" title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Simple + Divider */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Simple + Divider</Typography>
        <FeaturesItem variant="simple" withDivider title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Simple + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Simple + No Icon</Typography>
        <FeaturesItem variant="simple" icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Simple + Divider + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Simple + Divider + No Icon</Typography>
        <FeaturesItem variant="simple" withDivider icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Simple + Centered */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Simple + Centered</Typography>
        <FeaturesItem variant="simple" centerText title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>

      {/* Simple + Centered + No Icon */}
      <Grid item xs={12} sm={6} md={4}>
        <Typography typography="text-sm-semibold">Simple + Centered + No Icon</Typography>
        <FeaturesItem variant="simple" centerText icon={false} title={TITLE} description={DESCRIPTION} iconOnSeparateLine={icon} />
      </Grid>
    </Grid>
  </>
);

export default Index;
