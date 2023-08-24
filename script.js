// Adds a row input box
document.addEventListener("DOMContentLoaded", function () {
    const rowList = document.getElementById("rowList");
    const addRowButton = document.querySelector(".add-row");

    let currentRowNumber = 4; // Start with the next row number

    addRowButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        
        const newRow = document.createElement("li");
        currentRowNumber++; // Increment row number

        const label = document.createElement("label");
        label.setAttribute("for", `row-${currentRowNumber}`);

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", `row-${currentRowNumber}`);
        input.setAttribute("placeholder", String.fromCharCode(65 + currentRowNumber - 2));

        const button = document.createElement("button");
        button.classList.add("remove");
        button.innerText = "X";

        newRow.appendChild(label);
        newRow.appendChild(input);
        newRow.appendChild(button);

        rowList.appendChild(newRow);
    });
});

// Adds a column input box 
