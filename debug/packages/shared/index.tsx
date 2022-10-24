/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';
import { Text, StatusBar, View } from 'react-native';

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
    </View>
  );
};

export default App;