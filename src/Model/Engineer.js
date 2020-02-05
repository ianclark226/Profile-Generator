const Employee = require('./Employee');

module.exports = class Engineer extends Employee {
	constructor(name, id, email, github) {
        super(name, id, email);
       
		this._github = github;
	}

	getGithub() {
		return this._github;
	}

	first() {
		return `
        <div class="card">
				<h5 class="card-header">
					${this._name}
					Engineer
				</h5>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Id: ${this._id}</li>
						<li class="list-group-item">Email: ${this._email}</li>
						<li class="list-group-item">Github: ${this._github}</li>
					</ul>
                </div>
                </div>
			
		`;
	}
}

 



