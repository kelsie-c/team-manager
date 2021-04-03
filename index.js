const inquirer = require('inquirer');
const fs = require('fs');

let nameOfTeam = '';

// initialize app by creating the baseline HTML and starting the command line questions
function initialize() {
    createHTML();
    createTeam();
}

// command line questions
function createTeam() {
    inquirer.prompt([
        // boolean input type to determine if user wants to create a team
        {
            type: 'confirm',
            message: 'Would you like to create a new team?',
            name: 'makeTeam',
        },        
    ])
    // if no, stop app. otherwise, proceed to next question
    .then( function({makeTeam}) {
        if (!makeTeam) {
            return;
        }
        nameTeam();            
    })
}

function nameTeam() {
    // create a team name
    inquirer.prompt([
        {
            type: 'input',
            message: 'Add a team name:',
            name: 'teamName',
        },
    ])
    // send user a brief message and proceed to next question
    .then( function({teamName}) {
        nameOfTeam = teamName; 
        console.log(`Let's create your team ${nameOfTeam}!`);
        selectTeamMembers();
    })
}

function selectTeamMembers() {
    // add team members by having user choose from a list and add one at a time
    inquirer.prompt([
        {
            type: 'list',
            message: 'Add a team member:',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'teamChoice',
        },
        
    ])
    // send selected team member to function to gather more info about that member
    .then( function({teamChoice}) {
        let myTeamMember = teamChoice;
        teamMemberDetails(myTeamMember);
    })
}

function teamMemberDetails(teamChoice) {
    // gather all info for the Employee class
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the ${teamChoice}'s name?`,
            name: 'employeeName',
        },
        {
            type: 'input',
            message: `What is the ${teamChoice}'s ID?`,
            name: 'employeeID',
        },
        {
            type: 'input',
            message: `What is the ${teamChoice}'s email?`,
            name: 'employeeEmail',
        },
    ])
    // then ask one additional question based on team member's role
    .then( function() {
        console.log(teamChoice);
        if(teamChoice == 'Manager') {
            managerDetails(teamChoice);
        } else if (teamChoice === 'Engineer') {
            engineerDetails(teamChoice);
        } else if (teamChoice === 'Intern') {
            internDetails(teamChoice);
        }
    })
}

function managerDetails(teamChoice) {
    // if team member is a manager
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the ${teamChoice}'s office number?`,
            name: 'officeNumber',
        },
    ])
    // then ask if user wants to add another team member
    .then( function() {
        addToTeam();
    })
}

function engineerDetails(teamChoice) {
    // if team member is an engineer
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the ${teamChoice}'s GitHub username?`,
            name: 'gitHubUser',
        },
    ])
    // then ask if user wants to add another team member
    .then( function() {
        addToTeam();
    })
}

function internDetails(teamChoice) {
    // if team member is an intern
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the ${teamChoice}'s school?`,
            name: 'internSchool',
        },
    ])
    // then ask if user wants to add another team member
    .then( function() {
        addToTeam();
    })
}

function addToTeam() {
    // ask if user wants to add another team member
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member?',
            name: 'addAnother',
        }
    ])
    // if yes, return to function to select a team member. otherwise, ask user if they have finished building their team
    .then(function({addAnother}) {
        if (addAnother) {
            selectTeamMembers();
        } else {
            finalizeTeam();
        }
    })
}

function finalizeTeam() {
    // ask user if they have finished building their team
    inquirer.prompt([
        {
            input: 'confirm',
            message: `Have you completed ${nameOfTeam}?`,
            name: 'teamComplete'
        }
    ])
    // if yes, send a message to the user and ask if they want to create another team
    .then(function({teamComplete}) {
        if (teamComplete) {
            console.log(`Your team is now complete!`);
            makeAnotherTeam();
        }        
    })
    
}

function makeAnotherTeam() {
    // ask if they want to create another team
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to create another team?',
            name: 'makeTeam',
        },        
    ])
    // if no, stop application. otherwise, return to name team function
    .then( function({makeTeam}) {
        if (!makeTeam) {
            return;
        } else {
            nameTeam();
        }              
    })
}

function createHTML() {
    // create the base HTML to append later
    const baseHTML = `<!DOCTYPE html>
<html lang ="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Manager</title>
</head>
<body>

</body>
</html>`

    fs.writeFile("./dist/team-manager.html", html, function(err) {
        if(err) {
            console.log(err);
        }
    });
}

// start when user enters "node index.js" from the command line
initialize();