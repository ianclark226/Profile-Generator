

module.exports = class Employee {
	constructor(name, id, email) {
        this._name = name;
        this._id = id;
		this._email = email;
	}

	getId() {
		return this._id;
	}

	getName() {
		return this._name;
	}

	getEmail() {
		return this._email;
	}

	getRole() {
		return this.constructor.name;
	}
}