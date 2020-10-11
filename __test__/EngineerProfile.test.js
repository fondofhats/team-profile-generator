const EngineerProfile = require('../src/EngineerProfile');
const Engineer = require('../lib/Engineer');

test("create EngineerProfile object", () =>{
    const engineer = new Engineer('Michael','7','me@you.com','fondofhats');
    const engineerProfile = new EngineerProfile(engineer);
    expect(engineerProfile).toEqual({
        name:'Michael',
        id:'7',
        email:'me@you.com',
        role:'Engineer',
        github:'fondofhats',
        html:expect.any(String)
    });

});