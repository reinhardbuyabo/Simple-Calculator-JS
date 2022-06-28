// *** Write your code here***
let display = document.querySelector("#output");
let show = ' ';
let btn = document.querySelector(".red");
let del = document.querySelector("#del");

del.addEventListener("click", () => {
    let constituents = show.split('');
    constituents.pop();
    show = constituents.join('');
    display.placeholder = show;
})

appendNumber = (number) => {
    // Determines what will occur every time a user clicks on a number to add to the display 
    switch (number) {
        case 0:
            return 0;
            break;
        case 1:
            return 1
            break;
        case 2:
            return 2;
            break;
        case 3:
            return 3;
            break;
        case 4:
            return 4;
            break;
        case 5:
            return 5;
            break;
        case 6:
            return 6;
            break;
        case 7:
            return 7;
            break;
        case 8:
            return 8;
            break;
        case 9:
            return 9;
            break;
    }
}

appendchar = (character) =>  {
    switch (character) {
        case '+':
            show += '+';
            display.placeholder = show;
            break;
        case '-':
            show += '-';
            display.placeholder = show;
            break;
        case '*':
            show += '*';
            display.placeholder = show;
            break;
        case '/':
            show += '/';
            display.placeholder = show;
            break;
        case '.':
            show += '.';
            display.placeholder = show;
    }       
}

chooseOperation = (operation) => {
    // Controls what happens anytime a user clicks on any operation button.

}

compute = () => {

}

updateDisplay = () => {
    // Update the values inside of the output

}

calcNumbers = (num) => {
    show;
    show += appendNumber(parseInt(num));
    display.placeholder = show;
}

btn.addEventListener("click", () => {
        output.placeholder=eval(output.placeholder);
        show = ' ';
})

console.log(show);
console.log(output.value)
