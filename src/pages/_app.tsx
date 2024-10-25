import { FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';

import { CustomThemeProvider } from '@/library/components/tokens/ThemeProvider';

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');

  // eslint-disable-next-line no-console
  const handleThemeChange = (event) => {
    setMode(event.target.checked ? 'dark' : 'light');
  };

  return (
    <CustomThemeProvider mode={mode}>
      <FormControlLabel control={<Switch checked={mode === 'dark'} onChange={handleThemeChange} />} label="Dark Mode" />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
