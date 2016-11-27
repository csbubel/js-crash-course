class Message {
    constructor(author, content) {
        this.author = author;
        this.content = content;
        this.timestamp = new Date();
    }

    toString() {
        return `${this.author} : ${this.content}`;
    }
}