const InternProfile = require('../src/InternProfile');
const Intern = require('../lib/Intern');

test("create InternProfile object", () =>{
    const intern = new Intern('Michael','7','me@you.com','Yale');
    const internProfile = new InternProfile(intern);
    expect(internProfile).toEqual({
        name:'Michael',
        id:'7',
        email:'me@you.com',
        role:'Intern',
        school:'Yale',
        html:expect.any(String)
    });

});