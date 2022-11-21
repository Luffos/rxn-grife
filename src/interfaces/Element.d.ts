export interface Element {
  type: string;
  style: {
    set: (property: string, value?: string) => void;
    setMultiple: (values: {}) => void;
  };
  children: Array<Element>;
}

export type ElementCallback = (el: Element) => void;
