export class Message {
    #text;
    #length;
    #isRead;
    #deleted = false;
    constructor(text, length, isRead) {
        this.#text = text;
        this.#length = length;
        this.#isRead = isRead;
    }
    #assertAlive() {
        if (this.#deleted) {
            throw new Error('Экземпляр удалён, доступ невозможен');
        }
    }
    get text() {
        this.#assertAlive();
        return this.#text;
    }
    set text(value) {
        this.#assertAlive();
        if (typeof value !== 'string' || value.trim() === '') {
            throw new TypeError('text должен быть непустой строкой');
        }
        this.#text = value;
    }
    get length() {
        this.#assertAlive();
        return this.#length;
    }
    set length(value) {
        this.#assertAlive();
        if (!Number.isInteger(value) || value < 0) {
            throw new TypeError('length должен быть целым числом >= 0');
        }
        this.#length = value;
    }
    get isRead() {
        this.#assertAlive();
        return this.#isRead;
    }
    set isRead(value) {
        this.#assertAlive();
        if (typeof value !== 'boolean') {
            throw new TypeError('isRead должен быть boolean');
        }
        this.#isRead = value;
    }
    #markAsRead() {
        this.#isRead = true;
    }
    show() {
        this.#assertAlive();
        console.log(`text=${this.#text}`);
        console.log(`length=${this.#length}`);
        console.log(`isRead=${this.#isRead}`);
    }
    delete() {
        this.#assertAlive();
        this.#deleted = true;
        console.log('Экземпляр сообщения удален');
    }
    copy() {
        this.#assertAlive();
        return this;
    }
    static clone(instance) {
        return new Message(instance.text, instance.length, instance.isRead);
    }
}