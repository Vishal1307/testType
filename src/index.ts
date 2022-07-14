let first_name:string="gaurav"
let num:number=23
let isTrue:boolean=true

let arrNumber:number[]=[1,2,3,4]
let arrOfSting:string[]=["ram","shyam"]
let tuple:[string,string,number,boolean]
tuple=["a","b",2,true]
enum Office{
    User,
    SuperUser,
    Admin,
    SuperADmin

}
const staff=Office.SuperUser
console.log(staff)

const product=(a:number,b:number)=>{
    return a*b

}
console.log(product(2,3))

function isDiv(a:number,b:number):number{
    return a/b
}
console.log(isDiv(2,3))
function isName(value:string):void{
    console.log(value)

}
