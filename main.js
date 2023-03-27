let itemsContainer = document.getElementById("items");
let itemsTemplate = document.getElementById("item-template");
let addButton = document.getElementById("add");

let items = getItems();
function getItems () {
    const value = window.localStorage.getItem("todo") || "[]";
    
    return JSON.parse(value);
}

function setItems(items) {
    const itemsJson = JSON.stringify(items);

    window.localStorage.setItem("todo", itemsJson);
}

function addItem() {
    items.unshift({
        description: "",
        completed: false
    });

    setItems(items);
    refreshList();
}
function refreshList (){
    itemsContainer.innHTML = "";
    for (const item of items) {
        const itemElement = itemsTemplate.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        itemsContainer.append(itemElement);
        
    }
    
}

addButton.addEventListener("click", () => {
    addItem();
})

refreshList();