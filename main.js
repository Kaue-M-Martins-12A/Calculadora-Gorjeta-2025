let bill =  0
let tipPorcentage = 0
let NumberOfPeople = 0

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
    console.log(bill)
}

function receiveNumberOfPeopleValue() {
    NumberOfPeople = document.querySelector("#people").valueAsNumber
    console.log(NumberOfPeople)
}
