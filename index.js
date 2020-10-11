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
        const employee = this.createEmployee(await this.getEmployeeInfo());
        console.table(employee);


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

}

module.exports= App;

const app = new App();
app.init();


