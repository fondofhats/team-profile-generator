const App = require('../index');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


test("creates an App object", () =>{
    const app = new App();
    app.db.manager = true;
    const engineer = new Engineer('Michael', '7', 'me@you.com','fondofhats');
    const intern = new Intern('Michael','7','me@you.com','Yale');
    app.db.engineers.push(engineer);
    app.db.interns.push(intern);

    expect(app).toEqual({
        db:{
            manager: true,
            engineers: expect.any(Array),
            interns: expect.any(Array)
        }
    });
});