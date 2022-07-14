interface User{
    type:'user';
    name:string;
    age:number;
    occupation:string;
}
interface Admin {
    type:'admin',
    name:string;
    age:number;
    role:string;
}
const gaurav:User={
    type:'user',
    name:"gaurav",
    age:24,
    occupation:"sde"



}
const Boos:Admin={
    type:'admin',
    name:"boos",
    age:24,
    role:"backend",
}
function getUser({type,name,age,occupation}:User){
    return {type,name,age,occupation}

}
console.log(getUser(gaurav))
function getAdmin({type,name,age,role}:Admin){
    return {type,name,age,role}
}
console.log(getAdmin(Boos))