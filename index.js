const fs = require('fs');
const http = require('http');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const ManagerProfile = require('./src/ManagerProfile');
const EngineerProfile = require('./src/EngineerProfile');
const InternProfile = require('./src/InternProfile');
const TeamRoster = require('./src/TeamRoster');

class App {
    constructor() {
        this.db = {
            manager: null,
            engineers: [],
            interns: [],
        };
    }

    async init(){
        let input = '';
        do {
        const employee = this.createEmployee(await this.getEmployeeInfo());
        this.saveEmployeeToDb(employee);
        console.table(employee);
        input =
            await inquirer
                .prompt([
                    {
                        type: "confirm",
                        name: "exit",
                        message: "Would you like to enter another employee?",
                        default: false
                    }
                ]);

        } while(input.exit);

        const teamRoster = this.createTeamRoster();
        console.table(teamRoster);

    }

    /* Employee Info */

    async getOfficeNumber(employeeInfo){
        const managerInfo = 
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Office Number: ",
                        name: "officeNumber"
                    }
                ])
                .then(({ officeNumber })=>{
                    employeeInfo.officeNumber = officeNumber;
                });

        return employeeInfo;
    }

    async getGithubUser(employeeInfo){
        let engineerInfo =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "GitHub handle: ",
                        name: "github"
                    }
                ])
                .then(({ github })=>{
                    employeeInfo.github = github;
                });

        return employeeInfo;
    }

    async getSchoolInfo(employeeInfo){
        let internInfo =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "School: ",
                        name: "school"
                    }
                ])
                .then(({ school })=>{
                    employeeInfo.school = school;
                });

        return employeeInfo;
    }

    async getEmployeeInfo(){
        console.log(`\nPlease enter employee information:\n`);

        let employeeInfo =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "ID: ",
                        name: "id"
                    },
                    {
                        type: "input",
                        message: "Name: ",
                        name: "name"
                    },
                    {
                        type: "input",
                        message: "Email: ",
                        name: "email"
                    },
                    {
                        type: "input",
                        message: "Title: ",
                        name: "title"
                    }
                ]);

        switch(employeeInfo.title.toLowerCase()){
            case 'manager':
                employeeInfo = await this.getOfficeNumber(employeeInfo);
                break;
            case 'engineer':
                employeeInfo = await this.getGithubUser(employeeInfo);
                break;
            case 'intern':
                employeeInfo = await this.getSchoolInfo(employeeInfo);
                break;
            default:
                break;
        }
        return employeeInfo;
    }

    /* Create Employee Object */
    createEmployee(employeeInfo) {
        let employee;
        const { id, name, email } = employeeInfo;
        switch (employeeInfo.title.toLowerCase()) {
            case 'manager': {
                const manager = new Manager(name, id, email, employeeInfo.officeNumber);
                employee = manager;
                break;
            }
            case 'engineer': {
                const engineer = new Engineer(name, id, email, employeeInfo.github);
                employee = engineer;
                break;
            }
            case 'intern': {
                const intern = new Intern(name, id, email, employeeInfo.school);
                employee = intern;
                break;
            }
            default:
                break;
        }
        return employee;
    }

    /* Save Employee to APP array paramaters */
    saveEmployeeToDb(employee) {
        switch (employee.getRole().toLowerCase()) {
            case 'manager':
                this.db.manager = employee;
                break;
            case 'engineer':
                this.db.engineers.push(employee);
                break;
            case 'intern':
                this.db.interns.push(employee);
                break;
            default:
                break;
        }
    }

    createTeamRoster() {

        let managerProfile = '';
        let engineers = '';
        let interns = '';

        if (this.db.manager) {
            managerProfile = new ManagerProfile(this.db.manager);
            managerProfile = managerProfile.createProfile();
        }

        if (this.db.engineers) {
            for (const engineer of this.db.engineers) {
                let engineerProfile = new EngineerProfile(engineer);
                engineerProfile = engineerProfile.createProfile();

                engineers += engineerProfile;
            }
        }

        if (this.db.interns) {
            for (const intern of this.db.interns) {
                let internProfile = new InternProfile(intern);
                internProfile = internProfile.createProfile();

                engineers += internProfile;
            }
        }

        const team = managerProfile + engineers + interns;

        let teamRoster = new TeamRoster(team);
        teamRoster = teamRoster.createTeamRoster();

        return teamRoster;
    }

}

module.exports= App;

const app = new App();
app.init();
/* console.log(app.db.engineers.length);
console.log(app.db.interns.length);
 */

