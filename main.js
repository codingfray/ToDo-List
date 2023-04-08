let addButton = document.getElementById('addition');
let addContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    let deleteButton = document.createElement("button");
    if (inputField.value === ""){
        return;
    }
    paragraph.classList.add('paragraph-styling');
    deleteButton.classList.add('paragraph-button');
    deleteButton.innerHTML = "Delete";
    
    paragraph.innerText = inputField.value;
    addContainer.append(paragraph, deleteButton);
    // addContainer.appendChild(deleteButton);
    inputField.value = "";
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.color = 'grey';
    })
    deleteButton.addEventListener('click', function(){
        paragraph.remove(paragraph);
        deleteButton.remove(deleteButton);
    })
})

