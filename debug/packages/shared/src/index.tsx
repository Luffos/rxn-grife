/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { MyView2, MyText, MyText2 } from './styles';

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
          I'm João{' '}
          <Text>
            I'm Maria <Text>I'm the Witch of the Forest</Text>
          </Text>
        </Text>
      </MyText2>
    </View>
  );
};

export default App;
