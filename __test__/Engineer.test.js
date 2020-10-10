const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () =>{
    const engineer = new Engineer('Michael', '7', 'me@you.com','fondofhats');
    expect(engineer).toEqual({
        name: 'Michael',
        id: '7',
        email: 'me@you.com',
        role: 'Engineer',
        github:'fondofhats'
    });
});
test("gets Engineer's github username", () =>{
    const engineer = new Engineer('Michael', '7', 'me@you.com','fondofhats');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test("gets Engineer's role", () => {
    const engineer = new Engineer('Michael','7','me@you.com');
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));   
});