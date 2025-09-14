let Display = document.getElementById("Display");
let Buttons = document.querySelectorAll(".buttons");

let CurrentInput = "";

Buttons.forEach(Button => {
    Button.addEventListener("click", () => {
        const value = Button.textContent;

        if (value == "Clear") {
            CurrentInput = "";
            Display.textContent = 0;
        } 
        else if (value == "Equal") {
            try {
                CurrentInput = Calculations(CurrentInput);
                Display.textContent = CurrentInput;
            } catch {
                Display.textContent = "Error";
                CurrentInput = "";
            }
        } 
        else {
            CurrentInput += value;
            Display.textContent = CurrentInput;
        }
    });
});

function Calculations(Expression) {
    try {
        if (!/^[0-9+\-*/.()]+$/.test(Expression)) {
            return "Error";
        }
        return Function("return " + Expression)();
    } catch {
        return "Error";
    }
}
