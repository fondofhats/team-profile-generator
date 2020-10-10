const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Michael','7','me@you.com');

    expect(employee).toEqual({
        name: 'Michael',
        id: '7',
        role: 'Employee',
        email: 'me@you.com'
    });

});
test("get Employee's name", () => {
    const employee = new Employee('Michael','7','me@you.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("get's Employee's id", () => {
    const employee = new Employee('Michael','7','me@you.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets Employee's email", () => {
    const employee = new Employee('Michael','7','me@you.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test("gets Employee's role", () => {
    const employee = new Employee('Michael','7','me@you.com');
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));   
});
