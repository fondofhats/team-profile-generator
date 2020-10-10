const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
    
    /* Class Methods */
    getRole(){
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;