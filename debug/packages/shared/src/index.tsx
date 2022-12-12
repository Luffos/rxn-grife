/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { MyText, MyText2 } from './styles';
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
      <MyText>Hello, i'm MyText</MyText>
      <MyText2 className="po" style={{ fontSize: 21 }}>
        Hello i'm myText2
        <Text>
          A
          <Text>
            B <Text>C</Text>
          </Text>
        </Text>
      </MyText2>
    </View>
  );
};

export default App;
