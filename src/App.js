
import * as React from 'react';
import { AbsoluteCenter, Box, ChakraProvider } from '@chakra-ui/react'
import Game from './components/Game';

function App() {
  return (
    <ChakraProvider>
      <Box position='relative' h='400px'>
        <AbsoluteCenter  color='white' axis='both'>
          <Game />
        </AbsoluteCenter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
