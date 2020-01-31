const Employee = require('./Employee');
module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this._github = github;
       
    }


    getGithub() {
        return this._github;
    }

    easy() {
        return `
        <h5 class="card-header">
                Tri
                Engineer

            </h5>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this._id} 1</li>
                    <li class="list-group-item">Email: ${this._email} 123</li>
                    <li class="list-group-item">Office Number ${this._roomNumber}</li>
                </ul>
            </div>
            `;

    }

}



