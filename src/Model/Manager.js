const Employee = require('./Employee');

module.exports = class Manager extends Employee {
    constructor(name, id, email, roomNumber) {
    super(name, id, email);
    this._roomNumber = roomNumber;
    }

    getRoomNumber() {
        return this._roomNumber;
    }
}