# rxn-grife
Programmatic Styling Library for React and React Native 🎀

### styles.ts
```typescript
import { makeStyle } from 'rxn-grife';
import { useUnits } from 'rxn-units';

 export const s = makeStyle((el) => {
  
    const { vmin } = useUnits();

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
  });
```

### index.tsx
```typescript
import React, { useCallback } from 'react';
import { View, Text } from 'rxn-grife';
import { s } from './styles.ts';

const Foo = () => {

  return (
    <View style={s}>
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
