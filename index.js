const inquirer = require('inquirer');

let nameOfTeam = '';

function createTeam() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to create a new team?',
            name: 'makeTeam',
        },        
    ])
    .then( function({makeTeam}) {
        if (!makeTeam) {
            return;
        } else {
            nameTeam();
        }              
    })
}

function nameTeam() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Add a team name:',
            name: 'teamName',
        },
    ])
    .then( function({teamName}) {
        nameOfTeam = teamName; 
        console.log(`Let's create your team ${nameOfTeam}!`);
        selectTeamMembers();
    })
}

function selectTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Add a team member:',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'teamChoice',
        },
        
    ])
    .then( function({teamChoice}) {
        let myTeamMember = teamChoice;
        teamMemberDetails(myTeamMember);
    })
}

function teamMemberDetails(teamChoice) {
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
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the ${teamChoice}'s office number?`,
            name: 'officeNumber',
        },
    ])
    .then( function() {
        addToTeam();
    })
}

function engineerDetails(teamChoice) {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the ${teamChoice}'s GitHub username?`,
            name: 'gitHubUser',
        },
    ])
    .then( function() {
        addToTeam();
    })
}

function internDetails(teamChoice) {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the ${teamChoice}'s school?`,
            name: 'internSchool',
        },
    ])
    .then( function() {
        addToTeam();
    })
}

function addToTeam() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member?',
            name: 'addAnother',
        }
    ])
    .then(function({addAnother}) {
        if (addAnother) {
            selectTeamMembers();
        } else {
            finalizeTeam();
        }
    })
}

function finalizeTeam() {
    inquirer.prompt([
        {
            input: 'confirm',
            message: `Have you completed ${nameOfTeam}?`,
            name: 'teamComplete'
        }
    ])
    .then(function({teamComplete}) {
        if (teamComplete) {
            console.log(`Your team is now complete!`);
            makeAnotherTeam();
        }        
    })
    
}

function makeAnotherTeam() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to create another team?',
            name: 'makeTeam',
        },        
    ])
    .then( function({makeTeam}) {
        if (!makeTeam) {
            return;
        } else {
            nameTeam();
        }              
    })
}

createTeam();