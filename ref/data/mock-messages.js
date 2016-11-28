let DB = function() {
    const message1 = new Message("Kevin", "This is from a database!");
    const message2 = new Message("Natalie", "Well, sort of.");
    const messages = [message1, message2];

    this.getMessages = function() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(messages), 100);
        });
    };
};