var gaurav = {
    type: 'user',
    name: "gaurav",
    age: 24,
    occupation: "sde"
};
var Boos = {
    type: 'admin',
    name: "boos",
    age: 24,
    role: "backend"
};
function getUser(_a) {
    var type = _a.type, name = _a.name, age = _a.age, occupation = _a.occupation;
    return { type: type, name: name, age: age, occupation: occupation };
}
console.log(getUser(gaurav));
function getAdmin(_a) {
    var type = _a.type, name = _a.name, age = _a.age, role = _a.role;
    return { type: type, name: name, age: age, role: role };
}
console.log(getAdmin(Boos));
//# sourceMappingURL=ind2.js.map