/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { A, MyView, C } from './styles';
import { Text } from 'rxn-grife';


const App = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        padding: 5,
      }}
    >
      <StatusBar backgroundColor={'gray'} barStyle="light-content" />
      <Text className={'c'}>Hello World</Text>
      <A />
      <MyView />
      <C />
    </View>
  );
};

export default App;
