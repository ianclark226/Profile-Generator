const Employee = require('./Employee');

module.exports = class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this._school = school;
	}

	getSchool() {
		return this._school;
	}

	first() {
		return `
			<div class="card">
				<h5 class="card-header">
					${this._name}
                    : Intern
                    <i class="fas fa-school"></i>
				</h5>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Id: ${this._id}</li>
						<li class="list-group-item">Email: ${this._email}</li>
						<li class="list-group-item">School: ${this._school}</li>
					</ul>
				</div>
            </div>
            <script src = "https://kit.fontawesome.com/c502137733.js"></script>
		`;
	}
}