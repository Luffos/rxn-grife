/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, StyleSheet } from 'react-native';
import { makeStyle as ms, makeStyleFrom as from } from 'rxn-grife';

export const MyStyle = ms((el) => {});

//export const MyView1 = from(View);
export const MyView2 = from.View((el) => {});

export const MyView3 = from.View((el) => {});

export const MyText = from.Text((el) => {
  el.style.set({ color: 'pink' });

  el.children.map((c) => {
    if (c.type == 'Text') {
      c.style.set({ fontSize: 30 });
    }
  });
});
