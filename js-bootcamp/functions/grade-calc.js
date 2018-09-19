// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59 

let getGrade = function (Score, possibleScore) {
    let grade = (100/possibleScore) * Score  
    let letterGrade = ''
    
    if(grade  >= 90){
        letterGrade = 'A'
    }else if (grade  >= 80){
        letterGrade = 'B'
    }else if (grade  >= 70){
        letterGrade = 'C'
    }else if (grade  >= 60){
        letterGrade = 'D'
    }else {
        letterGrade = 'F'
    }
    return `${Score}/${possibleScore} -> You got a ${letterGrade} (${grade}%)!`

}

let result = getGrade(26,155)

console.log(result)

