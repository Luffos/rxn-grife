/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { A, MyText, C } from './styles';
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
      <MyText>Hello 3</MyText>
    </View>
  );
};

export default App;
