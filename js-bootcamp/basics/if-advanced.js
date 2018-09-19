/* ----- Lecture Practice -----

if(true){

}else{

}

if(true){

}else if(true){

}else{

} 

let isAccountLocked = false
let userRole = 'user'

if(isAccountLocked){
    console.log('Account is locked')
}else if (userRole == 'admin'){
    console.log('Welcome Admin')
}else{
    console.log('Welcome')
}
*/

/*----- challenge ------
if temp less than 35 print It is Freezing outside
if temp is  greater than 100 print It is Hot outside
any thing in between print It is pretty nice out. */

let  temp = 43

if (temp <= 35){
    console.log('It is Freezing outside!')

}else if(temp >= 100){
    console.log('It is Hot outside!')
    
}else {
    console.log('It is pretty nice out!')
}