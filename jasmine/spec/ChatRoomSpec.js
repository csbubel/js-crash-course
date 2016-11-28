describe("ChatRoom", function() {
    const title = "Title";
    const author = "Author";
    const content = "Hello, world!";
    const m1 = new Message(author, content);
    const m2 = new AdminMessage(author, content);

    it("should have an empty array of messages if not passed in", function() {
        const cr = new ChatRoom(title);
        expect(cr.getMessages()).toEqual([]);
    });

    it("should have an array of messages if passed in", function() {
        const cr = new ChatRoom(title, [m1]);
        expect(cr.getMessages()).toEqual([m1]);
    });

    it("should be able to filter for admin messages", function() {
        const cr = new ChatRoom(title, [m1, m2]);
        expect(cr.getAdminMessages()).toEqual([m2]);
    });

    it("should be able to return unique authors of all messages", function() {
        const cr = new ChatRoom(title, [m1, m2, new AdminMessage("John", "Hello")]);
        expect(cr.getUniqueAuthors()).toBe("Author, John");
    });

    it("should be able to return the shortest and longest message lengths as an array", function() {
        const cr = new ChatRoom(title, [m1, new Message(author, "Hello")]);
        expect(cr.getMessageStats()).toEqual([5, 13]);
    });

    it("should be able to print the shortest and longest message lengths", function() {
        const cr = new ChatRoom(title, [m1, new Message(author, "Hello")]);
        expect(cr.printMessageStats()).toEqual("5, 13");
    });

    it("should be able to add one message", function() {
        const cr = new ChatRoom(title);
        cr.addMessages(m1);
        expect(cr.getMessages()).toEqual([m1]);
    });

    it("should be able to add multiple messages", function() {
        const cr = new ChatRoom(title);
        cr.addMessages(m1, m2);
        expect(cr.getMessages()).toEqual([m1, m2]);
    });
    
    it("should have a function that prints out its own messages", function() {
        const cr = new ChatRoom(title);
        cr.addMessages(m1, m2);
        expect(cr.print()).toBe(`${m1.toString()}\n${m2.toString()}\n`);
    });

    it("should have a print function that can be passed messages", function() {
        const cr = new ChatRoom(title);
        cr.addMessages(m1, m2);
        expect(cr.print(cr.getAdminMessages())).toBe(`${m2.toString()}\n`);
    });

    describe("asynchronous specs", function() {
        const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 250;
        let cr;

        beforeEach(function(done) {
            cr = new ChatRoom(title);
            cr.getMessagesFromDb(function() {
                done();
            });
        });

        it("should pull 2 messages from mock DB by promise", function(done) {
            expect(cr.getMessages().length).toEqual(2);
            done();
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });
});