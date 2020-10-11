const ManagerProfile = require('../src/ManagerProfile');
const Manager = require('../lib/Manager');

test("creates a ManagerProfile object", () => {
    const manager = new Manager('Michael','7','me@you.com','1234567891');
    const managerProfile = new ManagerProfile(manager);
    expect(managerProfile).toEqual({
        name:'Michael',
        id:'7',
        email:'me@you.com',
        role:'Manager',
        officeNumber:'1234567891',
        html:expect.any(String)
    });


});