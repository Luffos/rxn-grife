# rxn-grife
🎀 Programmatic Styling Library for React and React Native.

### styles.ts
```typescript
import {
  makeStyle,
  makeStyleFrom as from
} from 'rxn-grife';

export const Root = from.View((el) => {
  el.style.set({
    width: '100%',
    height: '100%'
  });
});

export const myStyle = makeStyle((el) => {
  if (el.type == 'View') {
    el.style.set('backgroundColor', 'blue');

    el.children((c) => {
      c.cascade.style.set('color', 'white');

      if (c.type == 'View') {
        c.style.set({
          justifyContent: "center",
          alignItems: "center"
        });

        if (c.index.isFirst()) c.style.set('marginLeft', 4); // or c.index.value === 0
        if (c.index.isLast()) c.style.set('marginRight', 4);
        if (c.index.isOddly()) c.style.set('marginRight', 4);
      }
    });
  }
});

export const MyView = from.View((el) => {
  el.children((c) => {
    if (c.type == 'Text') {
      c.style.set('color', 'green');
    }
  });
});
```

### index.tsx
```tsx
import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { With as W } from 'rxn-grife';
import { Root, myStyle } from './styles.ts';

const Foo = () => {

  return (
    <Root>
      <W ...myStyle>
        <View>
          <Text id={'text1'}>Hello World</Text>
        </View>
        <View>
          <Text className={'genericText'}>How are you?</Text>
        </View>
      </W>

      <MyView>
        <Text>I'm Green</Text>
      </NyView>
    </Root>
  );
};

```
