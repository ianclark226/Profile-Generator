const Employee = require('./Employee');

module.exports = class Manager extends Employee {
	constructor(name, id, email, roomNumber) {
		super(name, id, email);
		this._roomNumber = roomNumber;
	}

	getRoomNumber() {
		return this._roomNumber;
	}

	first() {
		return `
			<div class="card">
				<h5 class="card-header">
					${this._name}
                    : Manager
                    <i class="fas fa-business-time"></i>
				</h5>
                <div class="card-body">
                
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Id: ${this._id}</li>
						<li class="list-group-item">Email: ${this._email}</li>
						<li class="list-group-item">Room Number: ${this._roomNumber}</li>
					</ul>
				</div>
            </div>
            <script src = "https://kit.fontawesome.com/c502137733.js"></script>
        `;
        
        
    }
    
    
}



