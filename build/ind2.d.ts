interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
declare const gaurav: User;
declare const Boos: Admin;
declare function getUser({ type, name, age, occupation }: User): {
    type: "user";
    name: string;
    age: number;
    occupation: string;
};
declare function getAdmin({ type, name, age, role }: Admin): {
    type: "admin";
    name: string;
    age: number;
    role: string;
};
