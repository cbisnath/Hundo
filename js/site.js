//Get the values from the page
//Starts our controller function
function getValues() {
    //Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //We need to validate our inputs
    //Parse into Intergers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        //Call generateNumbers
       let numbers = generateNumbers(startValue, endValue);
        //Call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter Integers");
    }
}

//Generate numbers from the startValue to the endValue
//Logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //We want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {

        //This will run in a loop until index = eValue
        numbers.push(index);
    }
    return numbers;
}

//Display numbers and mark even numbers in bold
//Display or view function(s)
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}