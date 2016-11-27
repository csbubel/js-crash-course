class ChatRoom {
    constructor(title, messages = []) {
        this.title = title;
        this.messages = messages;
    }

    getMessages() {
        return this.messages;
    }

    getAdminMessages() {
        const toBeFiltered = [...this.messages]; // Not needed, just demonstrating const and spread
        return toBeFiltered.filter(message => message instanceof AdminMessage);
    }

    addMessages(...messages) {
        this.messages.push(...messages);
    }

    print() {
        let output = "";
        this.messages.forEach(message => output += `${message.toString()}\n`);
        console.log(output);
    }
}