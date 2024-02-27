// import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ChooseCarColor from './Components/ChooseCarColor';
// import CarDetail from './Components/CarDetail';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ChooseCarColor />
        {/* <CarDetail/> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
