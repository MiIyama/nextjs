/* eslint-disable no-nested-ternary */
import { Grid, Container } from '@mui/material';

export default function GridLayout({ children, columns = {}, repeat = 6, spacing = 4 }) {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

  const resolvedColumns = breakpoints.reduce((acc, bp, index) => {
    const fallback = breakpoints
      .slice(0, index)
      .reverse()
      .find((key) => columns[key] !== undefined);
    acc[bp] = columns[bp] ?? columns[fallback] ?? 1;
    return acc;
  }, {});

  return (
    <Container>
      <Grid container spacing={spacing} columns={resolvedColumns}>
        {Array.from({ length: repeat }).map((_, index) => (
          <Grid key={index} item xs={1}>
            {children}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
