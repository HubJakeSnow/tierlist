document.addEventListener("DOMContentLoaded", function () {
    const rowList = document.getElementById("rowList");
    const addRowButton = document.querySelector(".add-row");
    const columnContainer = document.getElementById("columnContainer");
    const addColumnButton = document.querySelector(".add-column");
    const resetButton = document.querySelector(".reset");

    // Start row and column counts
    let currentRowNumber = 4;
    let columnCount = 0;

    function setupRemoveButton(button, input, isColumn) {
        button.addEventListener("click", function () {
            input.parentElement.remove();
            if (isColumn) {
                columnCount--;
            }
        });
    }

    // Add row button
    addRowButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Create a new row
        const newRow = document.createElement("li");
        currentRowNumber++;

        const label = document.createElement("label");
        label.setAttribute("for", `row-${currentRowNumber}`);

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", `row-${currentRowNumber}`);
   
        // Create new remove button
        const button = document.createElement("button");
        button.classList.add("remove");
        button.innerText = "X";
        setupRemoveButton(button, input, false);

        newRow.appendChild(label);
        newRow.appendChild(input);
        newRow.appendChild(button);

        rowList.appendChild(newRow);
    });

    // Add column button
    addColumnButton.addEventListener("click", function (event) {
        event.preventDefault();
        columnCount++;

        // Add 2 input boxes if currently no column input boxes on page. Else, add 1 
        const existingInputBoxes = columnContainer.querySelectorAll(".column-input");
        const numInputBoxes = (existingInputBoxes.length === 0) ? 2 : 1;

        // Loop to add input boxes
        for (let i = 0; i < numInputBoxes; i++) {
            const inputContainer = document.createElement("div");
            inputContainer.classList.add("column-input");

            const newInput = document.createElement("input");
            newInput.setAttribute("type", "text");
            newInput.setAttribute("name", `column-${columnCount}`);
            newInput.classList.add("column");

            const button = document.createElement("button");
            button.classList.add("remove");
            button.innerText = "X";
            setupRemoveButton(button, newInput, true);

            inputContainer.appendChild(newInput);
            inputContainer.appendChild(button);
            columnContainer.appendChild(inputContainer);
        }
    });

    // Reset button
    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        rowList.innerHTML = "";
        columnContainer.innerHTML = "";
        columnCount = 0;

        const defaultRows = ["S", "A", "B", "C"];
        for (let i = 0; i < defaultRows.length; i++) {
            const newRow = document.createElement("li");

            const label = document.createElement("label");
            label.setAttribute("for", `row-${i + 1}`);

            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", `row-${i + 1}`);
            input.setAttribute("placeholder", defaultRows[i]);

            const button = document.createElement("button");
            button.classList.add("remove");
            button.innerText = "X";
            setupRemoveButton(button, input, false);

            newRow.appendChild(label);
            newRow.appendChild(input);
            newRow.appendChild(button);

            rowList.appendChild(newRow);
        }
    });

    // Initial rows
    const initialRows = rowList.querySelectorAll("li");
    initialRows.forEach((row) => {
        const input = row.querySelector("input");
        const button = row.querySelector("button");
        setupRemoveButton(button, input, false);
    });
});