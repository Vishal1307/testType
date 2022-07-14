var masai = {
    first_name: "Masai",
    last_name: "school"
};
function getName(_a) {
    var first_name = _a.first_name, last_name = _a.last_name;
    if (last_name == "") {
        return "".concat(first_name);
    }
    return " ".concat(first_name, " ").concat(last_name);
}
console.log(getName(masai));
function PhoneBook(value) {
    var phone = value.phone;
    return phone;
}
//# sourceMappingURL=ind1.js.map