const inquirer = require('inquirer');
const fs = require('fs');

let nameOfTeam = '';
let teamObj = [];

// initialize app by creating the baseline HTML and starting the command line questions
function initialize() {
    // createHTML();
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
        buildTeam(teamObj);
    })
}

function buildTeam() {
    console.log(teamObj);
    // add team members by having user choose from a list and add one at a time
    inquirer.prompt([
        {
            type: 'list',
            message: 'Add a team member:',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'teamChoice',
        }
    ])
    // send selected team member to function to gather more info about that member
    .then( function({teamChoice}) {
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
        .then(function(nameOfTeam, employeeName, employeeID, employeeEmail) {
            console.log(teamChoice);

            if(teamChoice == 'Manager') {                        
                inquirer.prompt([
                    {
                        type: 'input',
                        message: `What is the ${teamChoice}'s office number?`,
                        name: 'officeNumber',
                    },
                ])
                // then ask if user wants to add another team member
                .then( function({officeNumber}) {
                    let phone = officeNumber;

                    nameOfTeam.role = teamChoice;
                    nameOfTeam.officeNumber = phone;
                    
                    teamObj.push(nameOfTeam);
                    console.log(teamObj);
                    addToTeam();
                })

            } else if (teamChoice === 'Engineer') {                        
                inquirer.prompt([
                    {
                        type: 'input',
                        message: `What is the ${teamChoice}'s GitHub username?`,
                        name: 'gitHubUser',
                    },
                ])
                // then ask if user wants to add another team member
                .then( function({gitHubUser}) {
                    let gitHub = gitHubUser;

                    nameOfTeam.role = teamChoice;
                    nameOfTeam.gitHubUser = gitHub;
                    
                    teamObj.push(nameOfTeam);
                    console.log(teamObj);                    
                    addToTeam();
                })

            } else if (teamChoice === 'Intern') {                        
                inquirer.prompt([
                    {
                        type: 'input',
                        message: `What is the ${teamChoice}'s school?`,
                        name: 'internSchool',
                    },
                ])
                // then ask if user wants to add another team member
                .then( function({internSchool}) {
                    let school = internSchool;

                    nameOfTeam.role = teamChoice;
                    nameOfTeam.internSchool = school;
                    
                    teamObj.push(nameOfTeam);
                    console.log(teamObj); 
                    addToTeam();
                })
            }
        })
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
            buildTeam();
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
            message: `Have you completed team ${nameOfTeam}?`,
            name: 'teamComplete'
        }
    ])
    // if yes, send a message to the user and ask if they want to create another team
    .then(function({teamComplete}) {
        if (teamComplete) {
            console.log(`Your team is now complete!`);
            // addToHTML(nameOfTeam, );
            createTeam();
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
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

function addToHTML() {

}

// start when user enters "node index.js" from the command line
initialize();