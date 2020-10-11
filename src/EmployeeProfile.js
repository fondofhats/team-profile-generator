class EmployeeProfile {
    constructor(employee){
        this.name = employee.name;
        this.id = employee.id;
        this.email = employee.email;
        this.role = employee.role;
        this.html = '';
    }

    setImage(){
        let strHtml = ``;
        if(this.role.toLowerCase() === 'manager'){
            strHtml = `
            <i class="fas fa-mug-hot fa-w-18 fa-2x mr-2"></i>
            <span class="employee-title">${this.role}</span>
            `;
        } else if(this.role.toLowerCase() === 'engineer'){
            strHtml = `
            <i class="fas fa-glasses fa-w-18 fa-2x mr-2"></i>
            <span class="employee-title">${this.role}</span>
            `;
        } else {
            strHtml = `
            <i class="fas fa-user-graduate fa-w-18 fa-2x mr-2"></i>
            <span class="employee-title">${this.role}</span>
            `;
        }
        return strHtml;
    }

    setProfile(){
        this.html = `<div class="col col-md-6 col-lg-6 col-xl-4 mb-4">
            <div class="card">
            <div class="badge badge-primary mt-3 p-3 mx-auto">
            ${this.setImage()}
            </div>`;

        this.html += `
        <div class="card-body">
        <h3 class="card-title text-center">${this.name}</h3>
        <ul class="card-text list-group">
        <li class="list-group-item"><span class="font-weight-bold">ID: </span> ${this.id}</li>
        <li class="list-group-item"><span class="font-weight-bold">Email: </span><a href="mailto:${this.email}">${this.email}</a></li>
        `;

        switch(this.role.toLowerCase()){
            case 'manager':
                this.html += `<li class="list-group-item"><span class="font-weight-bold">Office Phone: </span>${this.officeNumber}</li>`;
                break;
            case 'engineer':
                this.html += `<li class="list-group-item"><span class="font-weight-bold">GitHub: </span><a href="https://github.com/${this.github}">${this.github}</a> </li>`;
                break;
            case 'intern':
                this.html += `<li class="list-group-item"><span class="font-weight-bold">School: </span>${this.school}</li > `;
                break;
            default:
                break;
        }

        this.html += `
        </ul >
        </div >
        </div >
        </div >`;
    }

    setProfilePicture() {
        return Math.floor(Math.random() * 9) + 1;
    }

    createProfile() {
        return this.html;
    }
}

module.exports = EmployeeProfile;