list_of_numbers = [1,2,3,4,5,6,7,102,8,9,23,51,52,5,23,73];

function thirdHighest(list) {
    let highest_number = 0; 
    let second_highest_number = 0; 
    let third_highest_number = 0; 

    for (let number in list) {
        if (list[number] >= highest_number) {
            third_highest_number = second_highest_number;
            second_highest_number = highest_number;
            highest_number = list[number];
        } else if (list[number] >= second_highest_number) {
            third_highest_number = second_highest_number;
            second_highest_number = list[number];
        } else if (list[number] >= third_highest_number) {
            third_highest_number = list[number];
        }
    }
    return third_highest_number; 
}

console.log(thirdHighest(list_of_numbers));