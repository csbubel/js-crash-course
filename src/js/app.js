const chatRoom = new ChatRoom("All about cats");

chatRoom.print();

let author = "Chris";
let m1 = new Message(author, "Hello world");
chatRoom.addMessages(m1);

chatRoom.print();

author = "Andy";
m1 = new AdminMessage(author, "I'm an admin!");
let m2 = new AdminMessage(author, "Hurray!");
chatRoom.addMessages(m1, m2);

chatRoom.print();

console.log("Only admin messages:");
chatRoom.print(chatRoom.getAdminMessages());