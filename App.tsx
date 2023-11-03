import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { $fontFamily, $fontSizes, Text } from './src/components/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import Button from './src/components/Button';
import { Icon } from './src/components/Icon';
import Box from './src/components/Box';
import TextInput from './src/components/TextInput';
import { useAppTheme } from './src/hook/useAppTheme';

// import { Container } from './styles';

const App: React.FC = () => {
  const { colors } = useAppTheme()
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text mb='s8' preset='headingLarge' bold>Olá</Text>
          <Text mb='s40' preset='paragraphLarge'>Digite seu e-mail e senha para entrar</Text>


          <TextInput
            label='Email'
            placeholder='Digite seu e-mail'
            boxProps={{
              mb: 's20'
            }}
          />


          <TextInput
            label='Senha'
            placeholder='Digite sua senha'
            errorMessage='alksfjkaljfakls'
            RightComponent={<Icon name='eyeOff' color='gray2' />}
          />


          <Text color='primary' preset='paragraphSmall' bold mt='s10'>Esqueci minha senha</Text>

          <Button mt='s48' title='Entrar' />
          <Button preset='outline' title='Criar uma conta' mt='s12' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App;