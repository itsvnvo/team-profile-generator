const engineer = require("../lib/engineer");

it('should be an employee enitity', () => {
    const emp = new engineer();
    expect(typeof(emp)).toBe("object");
});

it('should display name', () => {
    const name = "Foos";
    const e = new engineer(name);
    expect(e.name).toBe(name);
});

it('should display id', () => {
    const value = "10";
    const e = new engineer("name",value);
    expect(e.id).toBe(value);
});

it('should display email', () => {
    const email = "test@test.com";
    const e = new engineer("Foo", 1, email);
    expect(e.email).toBe(email);
});

it('should display github', () => {
    const github = "github.com/itsvnvo";
    const e = new engineer("Foo", 1, "email@email.com", github);
    expect(e.github).toBe(github);
});