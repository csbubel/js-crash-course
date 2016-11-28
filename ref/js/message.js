class Message {
    constructor(author, content, timestamp = new Date()) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp;
        this.likes = 0;
    }

    toString() {
        return `${this.author} : ${this.content}`;
    }
}