module.exports = class Main {
    constructor() {
        this._teamArray = [];
    }

    async run() {
    const { teamSize } = await inquirer.prompt([{
        type: 'input',
        name: 'teamSize',
        message: 'Please input size of team',
        default: 2,
    }]);


    for (let i = 0; i < teamSize; i++) {
        const response = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message:'Select name',

        },
        {
            type: 'input',
            name: 'email',
            message:'What is your email',
        },
        {
            type: 'list',
            Position: 'role',
            message: 'What is your role',
            choices: [
                'Engineer',
                'Intern',
                'Manager'
            ]
        },
        {
            type:'input',
            name: 'github',
            message: 'What is your gethub',
            when: ({ role }) => role === 'Engineer'
        },
        {
            type:'input',
            name: 'school',
            message: 'What is your school',
            when: ({ role }) => role === 'Intern'
        },
        {
            type:'input',
            name: 'roomNumber',
            message: 'What is your roomNumber',
            when: ({ role }) => role === 'Manager'
        },
    
        

    ]);

    this._teamArray.push(response);
}
    console.log(this._teamArray);

    }
        
    }
