class AdminMessage extends Message {
    constructor(author, content, timestamp) {
        super(author, content, timestamp);
    }

    toString() { // Overriding super class function
        return `(ADMIN) ${super.toString()}`;
    }
}