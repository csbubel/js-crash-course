// Create the chatroom as a constant since it shouldn't change, at least for now
const chatRoom = new ChatRoom("All about cats");
chatRoom.print();

// Define an author with let because we'll change it later
let author = "Chris";
let m1 = new Message(author, "Hello world");

// Add messages can take any amount of messages
chatRoom.addMessages(m1);
chatRoom.print();

// Demonstrating promise usage
getMessages().then(messages => {
    chatRoom.addMessages(...messages);
    chatRoom.print();
}).catch(err => {
    console.log(err);
});

author = "Andy";
m1 = new AdminMessage(author, "I'm an admin!");
let m2 = new AdminMessage(author, "Hurray!");

// Adding multiple messages with rest operator
chatRoom.addMessages(m1, m2);
chatRoom.print();

console.log("Only admin messages:");
chatRoom.print(chatRoom.getAdminMessages());

console.log("Authors:");
console.log(chatRoom.getUniqueAuthors());