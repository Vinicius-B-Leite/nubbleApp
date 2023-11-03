import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Router from './src/routes/routes';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App;