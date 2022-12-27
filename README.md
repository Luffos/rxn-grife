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

- [Expo Snack Example ☁️](https://snack.expo.dev/@runtothedoor/rxn-grife-example)
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

      c.recursive.map((i) => i.style.set({color: 'white'}));

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

// Text with extra pseudo-props (just declaration) of id and className
// while "With" is an unique Grife's component serving as styling wrapper
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

## Components (allowing id and className props)
- ScrollView
- Text
- View

``OBS: You still can use default React Native's components, these just add extra pseudo-props (declaration only of id and className).``

## makeStyle Methods
  - ``makeStyle``
  creates style group without an base root element (needs to use ```<With ...genatedStyle>{...}</With>```). NOT WORKING YET

  - ``makeStyleFrom``
  Use any React Native's component as base (similar to styled-components's styled function)

## Elements method (when styling)
  - ```element.type```- element's type (displayName or name)
  - ```element.style.set()```- set styles (overwriting) for element (also ignoring inline styles)
  - ```element.style.pushBefore()```- push styles for element before already defined styles (less important)
  - ```element.style.pushAfter()```- push styles for element after already defined styles (more important)
  - ```element.id```- id defined on props 
  - ```element.className```- className defined on props


BETTER DOCS SOON...

## FAQ

Why RXN Grife as a name?
> RXN is a acronym for "React x Native" (Libraries aimed at a React Native system targeting Web as well), while Grife is a Brazilian Portuguese word for "designer label".

## Contributors

<a href = "https://github.com/Luffos/rxn-grife/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Luffos/rxn-grife"/>
</a>

##  📄 License
MIT - This module was built with ❤️ by [Luffos](https://github.com/Luffos)<br/>Feel free for modify, edit, copy, fork and share
