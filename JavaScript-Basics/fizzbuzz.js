function fizzbuzz(number) {
    for(let i = 0; i < number; i++) {
        const multiple_of_3 = i%3 == 0;
        const multiple_of_5 = i%5 == 0;

        if (multiple_of_3 && multiple_of_5) {
            console.log("fizzbuzz");
            continue;
        } else if (multiple_of_3) {
            console.log("fizz");
        } else if (multiple_of_5) {
            console.log("buzz")
        } else {
            console.log(i);
        }
    
    }
}


let number = parseInt(prompt("Choose a number: ",5));

fizzbuzz(number)
