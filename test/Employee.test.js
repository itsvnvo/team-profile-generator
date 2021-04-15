const employee = require("../lib/employee");

it('should be an employee enitity', () => {
    const emp = new employee();
    expect(typeof(emp)).toBe("object");
});

it('should display name', () => {
    const name = "Foos";
    const e = new employee(name);
    expect(e.name).toBe(name);
});

it('should display id', () => {
    const value = "10";
    const e = new employee("name",value);
    expect(e.id).toBe(value);
});

it('should display email', () => {
    const email = "test@test.com";
    const e = new employee("Foo", 1, email);
    expect(e.email).toBe(email);
});

it('should display role', () => {
    const title = "Employee";
    const e = new employee("name", 1, title);
    expect(e.role).toBe(title);
});