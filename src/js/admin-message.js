class AdminMessage extends Message {
    constructor(author, content) {
        super(author, content);
    }

    toString() {
        return `(ADMIN) ${super.toString()}`;
    }
}