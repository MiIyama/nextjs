import { Container, Box } from '@mui/material';
import Title from '@/library/components/atoms/Title';
import GridLayout from '../library/components/organisms/GridLayout';
import Card from '../library/components/organisms/Card';

const style = {
  variant: 'line',
  layout: 'rightImage',
};

const Divider = () => <Box sx={{ my: 2, bgcolor: 'black', height: 2, width: 1 }} />;

const Index = () => {
  const gridSteps = [1, 2, 3, 4, 5, 6];

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Title>Service Matrix: Finding the Right Fit</Title>
      {gridSteps.map((cols, index) => (
        <Box key={cols} sx={{ width: 1 }}>
          <GridLayout columns={{ xs: cols }} repeat={cols}>
            <Card {...style} />
          </GridLayout>
          {index !== gridSteps.length - 1 && <Divider />}
        </Box>
      ))}
      <Divider />
      <Box sx={{ width: 1 }}>
        <GridLayout columns={{ xs: 5 }} repeat={10}>
          <Card {...style} />
        </GridLayout>
      </Box>
      <Divider />
      <Box sx={{ width: 1 }}>
        <Box sx={{ width: '50%' }}>
          <GridLayout columns={{ xs: 1 }} repeat={4}>
            <Card {...style} />
          </GridLayout>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
