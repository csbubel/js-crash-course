describe("MockData", function() {
    it("should return a Promise", function() {
        expect(new DB().getMessages()).toEqual(jasmine.any(Promise));
    });
});