/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from 'react-native';
import { makeStyleFrom as from } from '../../../';

 export const C = from(View);

export const A = from.View(`a`);

export const MyView = from.Text((el: any) => {
  el.children((c: { type: string; style: { set: (arg0: string, arg1: string) => void } }) => {
    if (c.type == 'Text') {
      c.style.set('color', 'green');
    }
  });
});
