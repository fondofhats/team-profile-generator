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

    }

    /* Employee Info */

    async getOfficeNumber(){
        const managerInfo = 
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Office Number: ",
                        name: "officeNumber"
                    }
                ]);
        return await managerInfo.officeNubmer;
    }

    async getGithubUser(){
        let engineerInfo =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "GitHub handle: ",
                        name: "github"
                    }
                ]);
        return engineerInfo.github;
    }

    async getSchoolInfo(){
        let internInfo =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "School: ",
                        name: "school"
                    }
                ]);
        return internInfo.school;
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
                employeeInfo = await this.getOfficeNumber();
                break;
            case 'engineer':
                employeeInfo = await this.getGithubUser();
                break;
            case 'intern':
                employeeInfo = await this.getSchoolInfo();
                break;
            default:
                break;
        }
        console.log("employee Info: " + employeeInfo);
        return employeeInfo;
    }

}

module.exports= App;

const app = new App();
let empInfo = app.getEmployeeInfo();


