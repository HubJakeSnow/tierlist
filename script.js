document.addEventListener("DOMContentLoaded", function () {
    const rowList = document.getElementById("rowList");
    const addRowButton = document.querySelector(".add-row");
    const columnContainer = document.getElementById("columnContainer");
    const addColumnButton = document.querySelector(".add-column");

    let currentRowNumber = 4; // Starts with the next row number
    let addedColumnCount = 0; // Tracks the number of columns added

    function getNextLabel() {
        return String.fromCharCode(65 + addedColumnCount);
    }

    function setupRemoveButton(button, input, isColumn) {
        button.addEventListener("click", function () {
            input.parentElement.remove();
            if (isColumn) {
                addedColumnCount--; // Decrement addedColumnCount for columns
            }
        });
    }

    addRowButton.addEventListener("click", function (event) {
        event.preventDefault();

        const newRow = document.createElement("li");
        currentRowNumber++;

        const label = document.createElement("label");
        label.setAttribute("for", `row-${currentRowNumber}`);

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", `row-${currentRowNumber}`);
        input.setAttribute("placeholder", getNextLabel()); // Get next label
        if (currentRowNumber > 4) {
            input.removeAttribute("placeholder"); // Remove placeholder for new rows
        }

        const button = document.createElement("button");
        button.classList.add("remove");
        button.innerText = "X";
        setupRemoveButton(button, input, false); // Pass false for rows

        newRow.appendChild(label);
        newRow.appendChild(input);
        newRow.appendChild(button);

        rowList.appendChild(newRow);
    });

    addColumnButton.addEventListener("click", function (event) {
        event.preventDefault();
        addedColumnCount++;

        const numInputBoxes = (addedColumnCount === 1) ? 2 : 1; // Fix add column logic

        for (let i = 0; i < numInputBoxes; i++) {
            const inputContainer = document.createElement("div"); // Create a container for each input
            inputContainer.classList.add("column-input");

            const newInput = document.createElement("input");
            newInput.setAttribute("type", "text");
            newInput.setAttribute("name", `column-${addedColumnCount}`);
            newInput.classList.add("column");

            const button = document.createElement("button");
            button.classList.add("remove");
            button.innerText = "X";
            setupRemoveButton(button, newInput, true); // Pass true for columns

            inputContainer.appendChild(newInput);
            inputContainer.appendChild(button);
            columnContainer.appendChild(inputContainer);
        }
    });

    // Setup remove buttons for initial rows
    const initialRows = rowList.querySelectorAll("li");
    initialRows.forEach((row) => {
        const input = row.querySelector("input");
        const button = row.querySelector("button");
        setupRemoveButton(button, input, false); // Pass false for rows
    });
});