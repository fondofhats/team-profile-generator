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
}

module.exports= App;

const app = new App();

console.log(app);