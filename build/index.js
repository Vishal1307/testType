var first_name = "gaurav";
var num = 23;
var isTrue = true;
var arrNumber = [1, 2, 3, 4];
var arrOfSting = ["ram", "shyam"];
var tuple;
tuple = ["a", "b", 2, true];
var Office;
(function (Office) {
    Office[Office["User"] = 0] = "User";
    Office[Office["SuperUser"] = 1] = "SuperUser";
    Office[Office["Admin"] = 2] = "Admin";
    Office[Office["SuperADmin"] = 3] = "SuperADmin";
})(Office || (Office = {}));
var staff = Office.SuperUser;
console.log(staff);
var product = function (a, b) {
    return a * b;
};
console.log(product(2, 3));
function isDiv(a, b) {
    return a / b;
}
console.log(isDiv(2, 3));
function isName(value) {
    console.log(value);
}
//# sourceMappingURL=index.js.map