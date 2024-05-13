do {
    let mass = parseFloat(prompt("Enter your mass in kg"));
    let height = parseFloat(prompt("Enter your height in cm"));

    let bmi = mass/(height/100)**2

    if (isNaN(bmi) || bmi <= 0) {
        alert("Invalid input. Please enter valid numbers for mass and height.");
        continue; 
    }

    if (bmi < 18.5) {
        alert("You are underweight");
    } else if (bmi < 25) {
        alert("You have normal bmi");
    } else if (bmi < 30) {
        alert("You are overweight");
    } else {
        alert("You are obese");
    }

    var response = prompt("Do you want to continue? (yes/no)");

    if (response.toLowerCase() !== 'yes') {
        break; 
    }

} while (true);

alert("Program ended.");
