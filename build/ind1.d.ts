interface Obj {
    title: string;
    id: number;
    status: boolean;
}
interface Person {
    first_name: string;
    last_name: string;
}
declare const masai: Person;
declare function getName({ first_name, last_name }: Person): string;
interface Address {
    house_number: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PesronDetails {
    prefix: string;
    phone: number[];
    address: Address[];
    email: string;
    first_name: string;
    last_name: string;
    middle_name?: string | number;
}
declare function PhoneBook(value: any): PesronDetails[];
