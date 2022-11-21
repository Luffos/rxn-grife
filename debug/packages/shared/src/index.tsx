/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { MyView2, MyText } from './styles';
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
      <MyText className="po" style={{ color: 'green' }}>
        Hello 3<Text style={{ color: 'red' }}>I'm another text</Text>
      </MyText>
    </View>
  );
};

export default App;
