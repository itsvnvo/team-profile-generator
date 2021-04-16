const intern = require("../lib/intern");

it('should be an employee enitity', () => {
    const emp = new intern();
    expect(typeof(emp)).toBe("object");
});

it('should display name', () => {
    const name = "Foos";
    const e = new intern(name);
    expect(e.name).toBe(name);
});

it('should display id', () => {
    const value = "10";
    const e = new intern("name",value);
    expect(e.id).toBe(value);
});

it('should display email', () => {
    const email = "test@test.com";
    const e = new intern("Foo", 1, email);
    expect(e.email).toBe(email);
});

it('should display school', () => {
    const school = "SMU";
    const e = new intern("Foo", 1, "email@email.com", school);
    expect(e.school).toBe(school);
});