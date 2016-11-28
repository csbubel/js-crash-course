describe("User", function() {
    it("should create a user with name and age properties by passing in json", function() {
        const u = new User({name: "John", age: 22});
        expect(u.name).toBe("John");
        expect(u.age).toBe(22);
    });
});