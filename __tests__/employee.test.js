const Employee = require("../lib/Employee");

// testing the Employee class
describe("Employee", () => {

    // check that it can accept and store a name as a string
    it("sets an employee's name", () => {
        const nameEl = "Jane";
        const employeeEl = new Employee(nameEl);
        expect(employeeEl.name).toBe(nameEl);
    })

    // check that it can accept and store an ID as a string
    it("sets an employee's ID", () => {
        const idEl = "1234";
        const employeeEl = new Employee("Jane", idEl, "email");
        expect(employeeEl.id).toBe(idEl);
    })

    // check that it can accept and store an email as a string
    it("sets an employee's email", () => {
        const emailEl = "testing@gmail.com";
        const employeeEl = new Employee("Jane", "1234", emailEl);
        expect(employeeEl.email).toBe(emailEl);
    })

    // check that it returns the correct role
    it("creates a new employee object", () => {
        const roleEl = new Employee;
        expect(typeof(roleEl)).toBe("object");
    })
})

