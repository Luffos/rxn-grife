<a href="#" align="center">
  <img src="https://user-images.githubusercontent.com/28831375/198378773-b7370806-0667-4c5d-870b-8762af87c62b.png">
</a>
</br></br>
<p align="center">
  <img height="22px" alt="GitHub" src="https://img.shields.io/github/license/Luffos/rxn-grife?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub issues" src="https://img.shields.io/github/issues-raw/luffos/rxn-grife?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/luffos/rxn-grife?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/luffos/rxn-grife/main?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/luffos/rxn-grife?style=for-the-badge">
</p>

---------------------------------------------

</br>

<img src="https://camo.githubusercontent.com/8f5a77113f402feb14ff5ad400ecc54096e2a6dc8add6020373255152f3d0cba/687474703a2f2f7777772e616e696d617465646769662e6e65742f756e646572636f6e737472756374696f6e2f616e696d303230352d315f65302e676966"/>

### PROOF OF CONCEPT, DO NOT USE IN PRODUCTION! ⚠️ 

##  Install

Using NPM
```sh
npm install rxn-grife
```

Using Yarn
```sh
yarn add rxn-grife
```
🌐 Using this module for Web?<br/>Don't forget to setup [react-native-web](https://github.com/necolas/react-native-web)

## Example

- [CodeSandbox Example ☁️](https://codesandbox.io/s/rxn-grife-example-react-native-web-46pfld?file=/src/styles.ts)

## Usage 

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
    el.children.map((c) => {
      c.recursive.style.set({color: 'white'});

      if (c.type == 'View') {
        c.style.set({
          justifyContent: "center",
          alignItems: "center"
        });
      }
    });
});

export const MyView = from.View((el) => {
  el.children.map((c) => {
    if (c.type == 'Text') {
      c.style.set({color: 'green');
    }
  });
});
```

### index.tsx
```tsx
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { With as W, Text } from 'rxn-grife';
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
