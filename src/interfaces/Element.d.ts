export interface Element {
  type: string;
  style: {
    set: (
      ...args:
        | [string, string | number]
        | [
            {
              a: boolean;
            }
          ]
    ) => void;
  };
  children: Array<Element>;
}

export type ElementCallback = (el: Element) => void;