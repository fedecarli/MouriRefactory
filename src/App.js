import React from 'react';
import {View, SafeAreaView} from 'react-native';

import Refactory from './components/Refactory';

const dataSet = [
  {
    title: 'Item 1',
  },
  {
    title: 'Item 2',
  },
  {
    title: 'Item 3',
  },
  {
    title: 'Item 4',
  },
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Refactory dataSet={dataSet} />
    </SafeAreaView>
  );
};

export default App;
