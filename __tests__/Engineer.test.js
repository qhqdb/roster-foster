const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "west-korea";
    const employeeInstance = new Engineer("Michael", 2, "mic.ha.el@me.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "west-korea";
    const employeeInstance = new Engineer("Michael", 2, "mic.ha.el@me.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Michael", 2, "mic.ha.el@me.com", "west-korea");
    expect(employeeInstance.getRole()).toBe(returnValue);
});