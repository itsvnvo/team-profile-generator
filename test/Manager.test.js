const manager = require("../lib/manager");

it('should be an manager enitity', () => {
    const manage = new manager();
    expect(typeof(manage)).toBe("object");
});

it('should display name', () => {
    const name = "Foos";
    const e = new manager(name);
    expect(e.name).toBe(name);
});

it('should display id', () => {
    const value = "10";
    const e = new manager("name",value);
    expect(e.id).toBe(value);
});

it('should display email', () => {
    const email = "test@test.com";
    const e = new manager("Foo", 1, email);
    expect(e.email).toBe(email);
});

it('should display role', () => {
    const title = "Manager";
    const e = new manager("name", 1, title);
    expect(e.role).toBe(title);
});

if('should display number', () => {
    const num = "21615651"
    const n = new manager("Foo", 1, "email@email.com", num)
    expect(n.num()).toBe(num);
});