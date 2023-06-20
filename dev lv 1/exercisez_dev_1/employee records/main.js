const employees = []

function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    if (status === undefined){
        status = 'Full Time'
    } else {this.status = status}
    this.printEmployeeForm = function printEmployeeForm(){
        console.log('Name: ' + name + ', Job Title: ' + jobTitle + ', Salary: $' + salary + ', Status: ' + status)
    }
}

var jon = new Employee('Jon Jacob', 'Supreme Gregorian Chanter', 800000)
console.log(jon.printEmployeeForm())

var beth = new Employee('Beth Harmon', 'Grandmaster Chess Player', 69420)
console.log(beth.printEmployeeForm())

var greg = new Employee('Greg Spies', 'Tenor Sax Extrordinaire', 4, 'Part Time')
console.log(greg.printEmployeeForm())
