//write a function that checkes the elegible of aadhar card

function isEligibleForAadhar(age){
    if(age >= 18){
        console.log("Eligible for Aadhar card");
    }   else if(age < 0){
        console.log("Invalid age");
    }
    else {
        console.log("Not eligible for Aadhar card");
    }

}

isEligibleForAadhar(21)
isEligibleForAadhar(12)
isEligibleForAadhar(-1)