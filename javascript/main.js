let string = ""
let buttons = document.querySelectorAll(".all-buttons")
Array.from(buttons).map((button) => {
    button.addEventListener('click', (e) => {
        let userInput = e.target.innerHTML



        if (userInput == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if (userInput == "C") {
            string = ""
            document.querySelector("input").value = string;
        }

        else {
            string = string + userInput;
            document.querySelector("input").value = string;

        }

    })
})