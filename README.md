# rxn-grife
Styling Library (with Selectors) for React and React Native 🎀

```typescript
import React, {useCallback} from 'react';
import {mapStyle, View, Text} from 'grife';

const Foo = () => {

  const style = mapStyle((e) => {
    if (e.target.typeEquals.View()) {
      e.target.style.set.color('blue');
      e.target.style.setDomino.color('white');

      e.target.query.childrenOfType.View((childrenView) => {
        childrenView.style.flex_JCC(); //Justify Content Center if Flex
        childrenView.style.flex_AIC(); //Align Items Center if Flex

        if (childrenView.index.isFirst()) childrenView.style.set.marginLeft(4);
        if (childrenView.index.isLast()) childrenView.style.set.marginRight(4);
        if (childrenView.index.isOddly()) childrenView.style.set.marginRight(4);
      });
    }
  }, []);

  return (
    <View style={style}>
      <View>
        <Text classes={['mt']}>Hello World</Text>
      </View>
      <View>
        <Text classes={['mt']}>Hello World</Text>
      </View>
    </View>
  );
};

```
