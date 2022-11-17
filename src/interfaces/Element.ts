export interface Element {
    style: {
        set: () => void
    }
    children: Array<Element>
}
