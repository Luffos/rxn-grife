# rxn-grife
Programmatic Styling Library for React and React Native 🎀

```typescript
import React, {useCallback} from 'react';
import {mapStyle, View, Text} from 'grife';

const Foo = () => {
  const style = mapStyle((el) => {
    if (el.type == 'View') {
      el.style.set('backgroundColor', 'blue');

      el.children((c) => {
        c.cascade.style.set('color', 'white');

        if (c.type == 'View') {
          c.style.flex_JCC(); //Justify Content Center if Flex
          c.style.flex_AIC(); //Align Items Center if Flex
          //  or c.style.flex_JCC_AIC(); or c.style.flex_AIC_JCC();

          if (c.index.isFirst()) c.style.set('marginLeft', 4); // or c.index.value === 0
          if (c.index.isLast()) c.style.set('marginRight', 4);
          if (c.index.isOddly()) c.style.set('marginRight', 4);
        }
      });
    }
  }, []);

  return (
    <View style={style}>
      <View>
        <Text className={'mt'}>Hello World</Text>
      </View>
      <View>
        <Text className={'mt'}>Hello World 2</Text>
      </View>
    </View>
  );
};

```
