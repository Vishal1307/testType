interface Obj{
    title: string;
    id: number;
    status: boolean
}
interface Person{
    first_name: string;
    last_name: string;

}
const masai: Person={
    first_name: "Masai",
    last_name: "school"

}

function getName({first_name,last_name}:Person){
    if(last_name==""){
        return `${first_name}`
    }
    return ` ${first_name} ${last_name}`

}
console.log(getName(masai))

interface Address{
    house_number: number;
    street:string;
    city:string;
    state:string;
    postalCode:number;
    country:string;
}
interface PesronDetails{
    prefix:string;
    phone:number[];
    address:Address[];
    email:string;
    first_name:string;
    last_name:string;
    middle_name?:string |number;

}
function PhoneBook(value):PesronDetails[]{
    const {phone}=value
    return phone

}