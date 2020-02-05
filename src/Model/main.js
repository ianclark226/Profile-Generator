const inquirer = require('inquirer');
const fs = require('fs');
 const path = require('path');
 const util = require('util');


const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');


const writeFileSync = util.promisify(fs.writeFile);

class Main {
	constructor() {
        this._teamArray = [];
	}
  
	async _first(_teamArray) {
       
		let teamHTMLString = '';
		for (const teamMember of this._teamArray) {
			teamHTMLString += teamMember.first();
		}
        
        const result = Main._templateStart + teamHTMLString + Main._templateEnd;
        
        await fs.writeFileSync(path.resolve(__dirname, 'MyTeam.html'), result);
        
        
	}

	

	async run(first) {
		const { teamSize } = await inquirer.prompt([{
			type: 'input',
			name: 'teamSize',
			message: 'Please input your team size',
			default: 2,
		}]);

		for (let i = 0; i < teamSize; i++) {
            console.log('+++++++++++++++++++++++++++++');
			
			const response = await inquirer.prompt([
				{
					type: 'input',
					name: 'name',
					message: 'Please input your name',
                },
                {
					type: 'input',
					name: 'id',
					message: 'Please input your id',
				},
				{
					type: 'input',
					name: 'email',
					message: 'Please input your email',
				},
				{
					type: 'list',
					name: 'role',
					message: 'Please input your role',
					choices: [
						Main._ENGINEER,
						Main._INTERN,
						Main._MANAGER
					]
				},
				{
					type: 'input',
					name: 'github',
					message: 'Please input your github',
					when: ({ role }) => role === Main._ENGINEER
				},
				{
					type: 'input',
					name: 'school',
					message: 'Please input your school',
					when: ({ role }) => role === Main._INTERN
				},
				{
					type: 'input',
					name: 'roomNumber',
					message: 'Please input your room number',
					when: ({ role }) => role === Main._MANAGER
				},
			]);

			const {
                name,
                id,
				email,
				role,
				github,
				school,
				roomNumber,
			} = response;

			if (role === Main._ENGINEER) {
				this._teamArray.push(new Engineer(name, id, email, github));
			}
			if (role === Main._INTERN) {
				this._teamArray.push(new Intern(name, id, email, school));
			}
			if (role === Main._MANAGER) {
				this._teamArray.push(new Manager(name, id, email, roomNumber));
			}
        }
        
		
        
        await this._first();
		
	}
}

Main._ENGINEER = 'engineer';
Main._INTERN = 'intern';
Main._MANAGER = 'manager';

Main._templateStart = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<style>
			.page-header {
				background: lightblue;
				padding: 30px;
				font-size: xx-large;
				text-align: center;
				font-weight: bold;
			}
			.team-roster-container {
				display: flex;
				padding: 50px;
			}
			.card:not(:last-child) {
				margin-right: 20px;
			}
		</style>
		<title>Team Roster</title>
	</head>
	<body>
		<div class="page-header">My Team</div>
        <div class="team-roster-container">
        
        
`;

Main._templateEnd = `
		</div>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	</body>
	</html>
`

module.exports = Main;
