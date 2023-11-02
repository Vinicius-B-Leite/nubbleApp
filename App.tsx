import React from 'react';
import { View } from 'react-native';
import { Text } from './src/components/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import Button from './src/components/Button';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, paddingTop: 100 }}>
        <Text preset='headingLarge'>aaaaa</Text>
        <Text style={{ fontFamily: 'Satoshi-Bold' }}>aaaaa</Text>
        <Text style={{ fontFamily: 'Satoshi-Light' }}>aaaaa</Text>
        <Button loading title='aa' />
        <Button title='aa' />
      </View>
    </ThemeProvider>
  )
}

export default App;