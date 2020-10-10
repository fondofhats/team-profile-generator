const Intern = require('../lib/Intern');

test("create Intern object", () => {
    const intern = new Intern('Michael','7','me@you.com','Yale');
    expect(intern).toEqual({
        name:'Michael',
        id:'7',
        email:'me@you.com',
        role:'Intern',
        school:'Yale'
    });
});
test("gets Inters's role", () => {
    const intern = new Intern('Michael','7','me@you.com','Yale');
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));   
});
test("gets Intern's school", () => {
    const intern = new Intern('Michael','7','me@you.com','Yale');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));   
});
