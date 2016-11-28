describe("User", function() {
    it("should create a user with name and age properties by passing in json", function() {
        const u = new User({name: "John", age: 22});
        expect(u.name).not.toBe(undefined);
        expect(u.age).not.toBe(undefined);
    });
});