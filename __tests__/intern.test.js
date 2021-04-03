const Employee = require("../lib/Intern");

// testing the Employee class
describe("Intern", () => {

    // check that it can accept and store an office phone number
    it("sets intern's school", () => {
        const schoolEl = "Some Fancy School";
        const employeeEl = new Employee("Jane", "1234", "test", schoolEl);
        expect(employeeEl.school).toBe(schoolEl);
    })

    // check that it returns the correct role
    it("checks that the proper role is returned", () => {
        const roleEl = "Intern";
        const employeeEl = new Employee("x", "y", "z", "a");
        expect(employeeEl.getRole()).toBe(roleEl);
    })
})

