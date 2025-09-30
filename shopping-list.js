const newItem = document.getElementById('newItem');
const addBtn = document.getElementById('addBtn');
const addedItems = document.getElementById('addedItems');



// add item to the list when click "Add item"
      addBtn.addEventListener("click", () => {
        const itemText = newItem.value.trim();
        if (itemText) {
        const li = createListItem(itemText);
        addedItems.appendChild(li);
        newItem.value = " ";
    }

    });

function createListItem(text) {
    const li = document.createElement("li");

    const span = document.createElement("span"); // to hold the item text
    span.textContent = text;
    li.appendChild(span);
  


// Remove Button
// When the "Remove" button is clicked, the corresponding list item is
// deleted from the.
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "Remove";
        // removeBtn.classList.add("removeBtn");
        removeBtn.addEventListener("click", () => {
        li.remove();
        });


// Edit Button
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.textContent = "Edit";
       
// When the "Edit" button is clicked:Replace the item text with an input field containing the current
// text.
        editBtn.addEventListener("click", () => {
            if (editBtn.textContent === "Edit") {
                const input = document.createElement("input");
                input.type = "text";
                input.value = span.textContent;

                li.insertBefore(input, span);
                li.removeChild(span);



// Change the "Edit" button to a "Save" button.
// When "Save" is clicked, update the text with the new input value
// and revert the button back to "Edit".

        editBtn.textContent = "Save";
            } else {
            const input = li.querySelector("input");
            if (input.value.trim() !== "") {
                span.textContent = input.value.trim();
            }
             li.insertBefore(span, input);
             li.removeChild(input);
             
             editBtn.textContent = "Edit";
            }
        });
         li.appendChild(editBtn);
        li.appendChild(removeBtn);

        return li;
    }
        

