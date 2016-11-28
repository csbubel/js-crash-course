class ChatRoom {

    // Should take in a title and messages which should default to [].
    // Use ES2015 defaults to set messages equal to an empty array.
    constructor(/* 2 args */) {

    }

    // Should return messages
    getMessages() {

    }

    // Should make a call to DB.getMessages() in data/mock-messages.js, which returns a promise.
    // Use then and catch to appropriately handle the promise.
    // When the promise resolves, the messages should be added to this object using this.addMessages().
    // This method should also take in a callback which is called when the promise is resolved, e.g., 'callback()'.
    getMessagesFromDb(/* arg */) {

    }

    // Should return only those messages that are AdminMessages.
    // Consider using filters, arrow functions, and/or spreads.
    getAdminMessages() {

    }

    // Should return a string of unique author names, e.g., John, Mary.
    // Consider using a set, arrow functions, and string templates.
    getUniqueAuthors() {

    }

    // Should compute the shortest and longest message lengths.
    // Should return an array [shortest, longest] to be destructured later.
    getMessageStats() {
        
    }

    // Should print the message stats returned from the getMessageStates function, e.g., '5, 20'.
    // Consider using array destructuring and string templates.
    printMessageStats() {
        
    }

    // Should be able to add one or more messages to this object's messages array.
    // Consider using the spread and rest operators.
    addMessages(/* arg */) {

    }

    // Should print out all messages if not given an argument, or print out messages given.
    // Messages should be on new lines.
    // Consider using defaults, forEach, arrow functions, and string templates.
    print(/* */) {

    }
}