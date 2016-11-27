class Message {
    constructor(author, content, timestamp = new Date()) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp;
    }

    toString() {
        return `${this.author} : ${this.content}`;
    }
}