const message1 = new Message("Kevin", "This is from a database!");
const message2 = new Message("Natalie", "Well, sort of.");
const messages = [message1, message2];

function getMessages() {
    return new Promise((resolve, reject) => {
        // After some random amount of time, resolve the promise and pass the messages
        setTimeout(() => resolve(messages), 500 + Math.random() * 1000);
    });
}