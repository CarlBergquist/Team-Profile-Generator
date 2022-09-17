const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('carl', 1, 'email@gmail.com', 69);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('carl', 1, 'email@gmail.com', 69);

    expect(manager.getRole()).toEqual("Manager");
}); 