describe("AdminMessage", function() {
    const author = "Author";
    const content = "Hello, world!";

    it("should have a timestamp if passed in", function() {
        let m = new AdminMessage(author, content, new Date());
        expect(m.timestamp).not.toBe(undefined);
    });
    
    it("should have a timestamp without being passed in", function() {
        let m = new AdminMessage(author, content);
        expect(m.timestamp).not.toBe(undefined);
    });

    it("should have a proper toString", function() {
        let m = new AdminMessage(author, content);
        expect(m.toString()).toBe(`(ADMIN) ${author} : ${content}`);    
    });

    it("should have a 'likes' property", function() {
        let m = new AdminMessage(author, content);
        expect(m.likes).toBe(0);    
    });
});