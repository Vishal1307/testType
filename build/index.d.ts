declare let first_name: string;
declare let num: number;
declare let isTrue: boolean;
declare let arrNumber: number[];
declare let arrOfSting: string[];
declare let tuple: [string, string, number, boolean];
declare enum Office {
    User = 0,
    SuperUser = 1,
    Admin = 2,
    SuperADmin = 3
}
declare const staff = Office.SuperUser;
declare const product: (a: number, b: number) => number;
declare function isDiv(a: number, b: number): number;
declare function isName(value: string): void;
