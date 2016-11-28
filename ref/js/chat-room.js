class ChatRoom {
    constructor(title, messages = []) { // Default = means messages will be an empty array if not passed or undefined
        this.title = title;
        this.messages = messages;
    }

    getMessages() {
        return this.messages;
    }

    getMessagesFromDb(callback) {
        new DB().getMessages().then(messages => {
            this.addMessages(...messages);
            callback(messages);
        }).catch(err => {
            console.log(err);
        });
    }

    getAdminMessages() {
        const toBeFiltered = [...this.messages]; // Not needed, just demonstrating const and spread
        return toBeFiltered.filter(message => message instanceof AdminMessage);
    }

    getUniqueAuthors() {
        let s = new Set();
        this.messages.forEach(message => s.add(message.author)); // Set maintains unique items

        let output = "";
        for (let a of s.keys()) output += `${a.toString()}, `;
        output = output.slice(0, -2); // Remove the last two chars
        return output;
    }

    addMessages(...messages) { // Rest operator ... means messages is an array
        this.messages.push(...messages); // Spread operator ... will cause each item to be pushed
    }

    print(messages = this.messages) {
        let output = ""; // Let is the new var - the value can change
        messages.forEach(message => output += `${message.toString()}\n`); // Back ticks denote string template
        return output;
    }
}