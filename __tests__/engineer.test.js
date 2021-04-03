const Employee = require("../lib/Engineer");

// testing the Employee class
describe("Engineer", () => {

    // check that it can accept and store an office phone number
    it("sets engineers's GitHub", () => {
        const gitHubEl = "test-user";
        const employeeEl = new Employee("Jane", "1234", "test", gitHubEl);
        expect(employeeEl.gitHubUser).toBe(gitHubEl);
    })

    // check that it returns the correct role
    it("checks that the proper role is returned", () => {
        const roleEl = "Engineer";
        const employeeEl = new Employee("x", "y", "z", "a");
        expect(employeeEl.getRole()).toBe(roleEl);
    })
})

