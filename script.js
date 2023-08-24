// Adds a row input box
document.addEventListener("DOMContentLoaded", function () {
    const rowList = document.getElementById("rowList");
    const addRowButton = document.querySelector(".add-row");
    const columnContainer = document.getElementById("columnContainer");
    const addColumnButton = document.querySelector(".add-column");

    let currentRowNumber = 4; // Starts with the next row number
    let addedColumnCount = 0; // Tracks the number of columns added

    addRowButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission and webpage reloading
        
        const newRow = document.createElement("li");
        currentRowNumber++; // Increment row number

        const label = document.createElement("label");
        label.setAttribute("for", `row-${currentRowNumber}`);

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", `row-${currentRowNumber}`);
        input.setAttribute("placeholder", String.fromCharCode(65 + currentRowNumber - 2)); // Character calculation

        const button = document.createElement("button");
        button.classList.add("remove");
        button.innerText = "X";

        newRow.appendChild(label);
        newRow.appendChild(input);
        newRow.appendChild(button);

        rowList.appendChild(newRow);
    });

    // Adds a column input box
    addColumnButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        
        addedColumnCount++;

    // Adds two input boxes on the first click, then one for next clicks
    const numInputBoxes = (addedColumnCount === 1) ? 2 : 1;

    for (let i = 0; i < numInputBoxes; i++) {
        const newInput = document.createElement("input");
        newInput.setAttribute("type", "text");
        newInput.setAttribute("name", `column-${addedColumnCount}`);
        newInput.classList.add("column");
        columnContainer.appendChild(newInput);
    }
    });
});
