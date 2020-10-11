# Team Profile Generator 

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/fondofhats/professional-readme-generator)

## Requirements/Description
### Description
Aa Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
<br>
### Requirements
#### User Story
>AS A Manager<br>
I WANT to generate a webpage that displays my team's basic info<br>
SO THAT I have quick access to their emails and GitHub profiles<br>
<br>

>GIVEN a command-line application that accepts user input
>>WHEN I am prompted for my team members and their information<br>
>> + THEN an HTML file is generated that displays a nicely formatted team roster based on user input<br>

>>WHEN I click on an email address in the HTML<br>
>> + THEN my default email program opens and populates the TO field of the email with the address<br>

>>WHEN I click on the GitHub username <br>
>> + THEN that GitHub profile opens in a new tab<br>

>>WHEN I start the application<br>
>> + THEN I am prompted to enter the team manager’s name, employee ID, 
email address, and office number<br>

>>WHEN I enter the team manager’s name, employee ID, email address, and office number<br>
>> + THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team<br>

>>WHEN I select the engineer option<br>
>> + THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu<br>

>>WHEN I select the intern option<br>
>> + THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu<br>

>>WHEN I decide to finish building my team<br>
>> + THEN I exit the application, and the HTML is generated<br>
<br>

## Installation

An application that will run in the terminal using node.js.<br /><br />
Run npm install

```shell
npm install
```

Run Readme Generator

```shell
node index.js
```
<br>
<br>


### Demonstration

[Walkthrough Video](https://drive.google.com/file/d/1BOwseNSpGRH3SuAYnepB1CKnnZ4yNe5P/view)

<br>

## Issues
[![GitHub issues](https://img.shields.io/github/issues/fondofhats/team-profile-generator.svg)](https://GitHub.com/fondofhats/team-profile-generator/issues/)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/fondofhats/team-profile-generator.svg)](https://GitHub.com/fondofhats/team-profile-generator/issues?q=is%3Aissue+is%3Aclosed)

<br>
<br>


## Technologies

* [node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [inquirer.js](https://www.npmjs.com/package/inquirer)
* [fs.js](https://www.npmjs.com/package/fs)
* [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* [Fontawesome](https://fontawesome.com/)
