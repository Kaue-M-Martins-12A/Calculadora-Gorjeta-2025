let bill =  0
let tipPercentage = 0
let NumberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber
    console.log(bill)
}

function receiveNumberOfPeopleValue() {
    NumberOfPeople = document.querySelector("#people").valueAsNumber
    console.log(NumberOfPeople)
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")

}