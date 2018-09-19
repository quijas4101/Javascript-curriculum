/*----- Lecture Practice -----
let temp = 125

//Logical And Operator - True if both conditons are true. False otherwise.
//Logical Or Operator - True if at least one side is true.False otherwise.

if(temp >= 60 && temp <= 90){
    console.log('It is pretty nice out')
}else if (temp <=0 || temp >= 120){
    console.log('Dont go outside')
}else {
    console.log('Do what you want')
} */

/* Challenge 
reservation system 
have 2 boolean variables isGuestOneVegan and is GuestTwoVegan

Are both guest Vegan? Only offer vegan dishes
At least  one Vegan? Make sure to Offer up some vegan options.
Else, Offer up anything on the menue */

let isGuestOneVegan = false
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer vegan dishes')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to Offer up some vegan options')
}else{
    console.log('Offer up anything on the menue')
}
