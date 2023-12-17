/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ThemeProvider} from "./themes/ThemeProvider";
import { HomeScreen } from './screens/HomeScreen';


function App(): React.JSX.Element {
  return (
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
  );
}

export default App;