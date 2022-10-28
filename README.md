<a href="#" align="center">
  <img src="https://user-images.githubusercontent.com/28831375/198378773-b7370806-0667-4c5d-870b-8762af87c62b.png">
</a>
</br></br>
<p align="center">
  <img height="22px" alt="GitHub" src="https://img.shields.io/github/license/Luffos/rxn-grife?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub issues" src="https://img.shields.io/github/issues-raw/luffos/rxn-grife?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/luffos/rxn-grife?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/luffos/rxn-grife/main?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/luffos/rxn-grife?style=for-the-badge">
</p>

<p align="center"><a href="https://luffos.github.io/rxn-grife">See Official Website</a></p>

---------------------------------------------

</br>

<img src="https://camo.githubusercontent.com/8f5a77113f402feb14ff5ad400ecc54096e2a6dc8add6020373255152f3d0cba/687474703a2f2f7777772e616e696d617465646769662e6e65742f756e646572636f6e737472756374696f6e2f616e696d303230352d315f65302e676966"/>

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
