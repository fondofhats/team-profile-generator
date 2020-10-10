const Manager = require('../lib/Manager');

test('create a Manager object', () => {
    const manager = new Manager('Michael','7','me@you.com','1234567891');
    expect(manager).toEqual({
        name:'Michael',
        id:'7',
        email: 'me@you.com',
        role: 'Manager',
        officeNumber:'1234567891'
    });
});
test("gets Manager's role", () => {
    const manager = new Manager('Michael','7','me@you.com','1234567891');
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));   
});
test("gets Managers's office number", () => {
    const manager = new Manager('Michael','7','me@you.com','1234567891');
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));   
});

