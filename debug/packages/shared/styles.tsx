/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from 'react-native';
import { makeStyleFrom as from } from 'rxn-grife';

//export const C = from(View);
export const C = from.View((el) => {});

export const A = from.View((el) => {});

export const MyView = from.Text((el) => {
  el.children((c: any) => {
    if (c.type == 'Text') {
      c.style.set('color', 'green');
    }
  });
});
