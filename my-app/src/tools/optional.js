export class Optional {
    #value;

    constructor(newValue) {
        this.#value = newValue;
    }

    get() {
        return this.#value;
    }
    
    isPresent() {
        return this.#value !== undefined;
    }

    ifPresent(callback) {
        if (this.isPresent()) {
            callback(this.#value);
        }

        return this;
    }

    getOrElse(other) {
        return this.isPresent() ? this.#value : other;
    }

    getOrGenerate(supplier) {
        return this.isPresent() ? this.#value : supplier();
    }

}