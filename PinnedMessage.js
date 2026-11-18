import { Message } from './Message.js';
export class PinnedMessage extends Message {
    #isPinned;
    constructor(text, length, isRead, isPinned) {
        super(text, length, isRead);
        this.#isPinned = isPinned;
    }
    get isPinned() {
        return this.#isPinned;
    }
    set isPinned(value) {
        if (typeof value !== 'boolean') {
            throw new TypeError('isPinned должен быть boolean');
        }
        this.#isPinned = value;
    }
    show() {
        super.show();
        console.log(`isPinned=${this.#isPinned}`);
    }
    static clone(instance) {
        return new PinnedMessage(
            instance.text,
            instance.length,
            instance.isRead,
            instance.isPinned
        );
    }
}