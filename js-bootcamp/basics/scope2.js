// Global (name)
    /// Local (name)
        //// Local (name)
    /// Local

let name = 'Jose'

if(true){
   let name = 'Sam' // Variable shadowing 
    if(true){
       let name = 'Nadine'
    console.log(name) // Nadine
    }
    console.log(name)  // Sam
}

if(true){
    console.log(name) // Jose
}