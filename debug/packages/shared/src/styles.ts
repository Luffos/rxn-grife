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
  el.style.set({ color: 'orange' });
});

export const MyText2 = from.Text((el) => {
  console.log('el styles', el);
  el.style.set({ color: 'red' });

  el.children.map((a) => {
    if (a.type == 'Text') a.style.set({ color: 'purple' });

    a.children?.map((bbb) => {
      if (bbb.type == 'Text') bbb.style.set({ color: 'yellow' });

      bbb.children?.map((ccc) => {
        if (ccc.type == 'Text') ccc.style.set({ color: 'brown' });
      });
    });
  });
});
