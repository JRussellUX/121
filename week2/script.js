// Jennifer Russell, 01/13/2023
// 1. Prompt for input
// 2. Changes input to lowercase
// 3. Checks for a valid entry ( At least 2 chracters)
// 4. Check if first letter is a vowel
// 4.1 If it is a vowel then it adds "way" to the end of the input
// 4.2 If it is not a vowel then it checks if the second letter is a vowel
// 4.2.1 if it is a vowel then moves the first letter to the end of the input and adds "ay" to it.
// 4.2.2 If the second character is not a vowel then it takes the first 2 characters and moves them to the end of the input and adds "ay" to it.
// 5. The new string is logged to the output

let input = prompt("What is your message?");
input = input.toLowerCase();
let firstLetter = input.substring(0, 1);
let result = "";
if (input.length < 2) {
    result = "Please enter two or more characters.";
} else {
    switch (firstLetter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            result = input + "way";
            break;

        default:
            let secondLetter = input.substring(2, 1);
            switch (secondLetter) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    let rest = input.substring(1);
                    result = rest + firstLetter + "ay";
                    break;
                default:
                    let restTwo = input.substring(2);
                    result = restTwo + firstLetter + secondLetter + "ay";
            }
    }
}

console.log(result);