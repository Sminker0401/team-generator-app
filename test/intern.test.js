const Intern = require("../lib/Intern");

test("Can create school.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("stephanie", 2, "stephanie@test.com", testSchool);
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("stephanie", 2, "stephanie@test.com", testSchool);
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern("stephanie", 2, "stephanie@test.com", "testName");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
