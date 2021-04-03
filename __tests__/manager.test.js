const Employee = require("../lib/Manager");

// testing the Employee class
describe("Manager", () => {

    // check that it can accept and store an office phone number
    it("sets manager's phone number", () => {
        const phoneEl = "1234567890";
        const employeeEl = new Employee("Jane", "1234", "test", phoneEl);
        expect(employeeEl.officeNumber).toBe(phoneEl);
    })

    // check that it returns the correct role
    it("checks that the proper role is returned", () => {
        const roleEl = "Manager";
        const employeeEl = new Employee("x", "y", "z", "a");
        expect(employeeEl.getRole()).toBe(roleEl);
    })
})

