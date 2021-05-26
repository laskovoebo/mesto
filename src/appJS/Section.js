export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    setItem(item) {
        this._container.prepend(item);
    }

    renderItems() {
        this._items.forEach((item) => {
            this.setItem(this._renderer(item));
        })
    }
}
