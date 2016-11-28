describe("Message", function() {
    const author = "Author";
    const content = "Hello, world!";

    it("should have a timestamp if passed in", function() {
        const m = new Message(author, content, new Date());
        expect(m.timestamp).not.toBe(undefined);
    });
    
    it("should have a timestamp without being passed in", function() {
        const m = new Message(author, content);
        expect(m.timestamp).not.toBe(undefined);
    });

    it("should have a constructor that accepts author, content, and possibly timestamp", function() {
        const m = new Message(author, content);
        expect(m.author).not.toBe(undefined);
        expect(m.content).not.toBe(undefined);
        expect(m.timestamp).not.toBe(undefined);
    });

    it("should have a proper toString", function() {
        const m = new Message(author, content);
        expect(m.toString()).toBe(`${author} : ${content}`);    
    });
});