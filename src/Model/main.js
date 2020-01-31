const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const readFileAsync = util.promisify(fs.readfile);
const writeFileAsync = util.promisify(fs.writeFile);




class Main {
    constructor() {
        this._teamArray = [];
    }

    async _easy() {
       let teamHTMLString = '';
       for(const teamMember of this._teamArray) {
           teamHTMLString += teamMember.easy();
       }
       
       const results = Main._templateStart + teamHTMLString + Main._templateEnd;
       await writeFileAsync(path.resolve(__dirname, '..', 'dist', 'easy.html'), results);
    }

    async _hard() {
        const templatePath = path.resolve(__dirname, '..', 'templates', 'main.ejs');
        const ejsTemplate = await readFileAsync(templatePath, 'utf-8');

        const results = ejs.render(ejsTemplate, {
            teamMember: this._teamArray
        }, {
            filename: templatePath
        });

        console.log(results);

    }

    async run() {
        // const { teamSize } = await inquirer.prompt([{
        //     type: 'input',
        //     name: 'teamSize',
        //     message: 'Please input size of team',
        //     default: 2,
        // }]);


        // for (let i = 0; i < teamSize; i++) {
        //     const response = await inquirer.prompt([
        //         {
        //             type: 'input',
        //             name: 'name',
        //             message: 'Select name',

        //         },
        //         {
        //             type: 'input',
        //             name: 'email',
        //             message: 'What is your email',
        //         },
        //         {
        //             type: 'list',
        //             Position: 'role',
        //             message: 'What is your role',
        //             choices: [
        //                 'Engineer',
        //                 'Intern',
        //                 'Manager'
        //             ]
        //         },
        //         {
        //             type: 'input',
        //             name: 'github',
        //             message: 'What is your gethub',
        //             when: ({ role }) => role === 'Engineer'
        //         },
        //         {
        //             type: 'input',
        //             name: 'school',
        //             message: 'What is your school',
        //             when: ({ role }) => role === 'Intern'
        //         },
        //         {
        //             type: 'input',
        //             name: 'roomNumber',
        //             message: 'What is your roomNumber',
        //             when: ({ role }) => role === 'Manager'
        //         },



        //     ]);

        //     const {
        //         name,
        //         email,
        //         role,
        //         github,
        //         school,
        //         roomNumber,
        //     } = response;

        //     if (role === 'Engineer') {
        //         this._teamArray.push(new Engineer(name, id, email, github));
        //     }

        //     if (role === 'Intern') {
        //         this._teamArray.push(new Intern(name, id, email, school));
        //     }

        //     if (role === 'Manager') {
        //         this._teamArray.push(new Manager(name, id, email, roomNumber));
        //     }



        // }

        this._teamArray = [
            new Engineer('engineer name', 'engineer email', 'engineer github'),
            new Intern('intern name', 'intern email', 'intern school'),
            new Manager('manager name', 'manager email', 'manager room number'),
        ] 

        await this._easy;
        
        


    }

}

Main._ENGINEER = 'engineer';
Main._INTERN = 'intern';
Main._MANAGER = 'manager';

Main._templateStart = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style>
    .page-header {
        background: gray;
        padding: 30px;
        font-size: xx-large;
        text-align: center;
        font-weight: bold;
    }

    .team-roster-container{
        display: flex;
        padding: 50;
    }

    .card:not(:last-child) {
        margin-right: 20px;
    }
    </style>
    
    <title>My Team App</title>
</head>
<body>

    <div class = "page-header">My Team of Villians</div>

    <div class="team-roster-container">
    `;

    Main._templateEnd = `
        <div class="card">
            <h5 class="card-header">
                Tri
                Engineer

            </h5>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 1</li>
                    <li class="list-group-item">Email: 123</li>
                    <li class="list-group-item">Office Number</li>
                </ul>
            </div>


        </div>
        <div class="card">
            <h5 class="card-header">
                Tri
                Engineer
            </h5>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 1</li>
                    <li class="list-group-item">Email: 123</li>
                    <li class="list-group-item">Office Number</li>
                </ul>
            </div>
            
        </div>
    </div>
    
</body>
</html>`

module.exports = Main;
