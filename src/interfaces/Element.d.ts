  export interface Element {
    style: {
      set: (v: string, k?: string) => void;
      setMultiple: (v: {}) => void;
    };
    children: Array<Element>;
  }