describe("INDEX - Probando Jest", () => {
    test("INDEX001 - Console log saludo   ", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        console.log('hello');
        expect(consoleSpy).toHaveBeenCalledWith('hello');
    });
});