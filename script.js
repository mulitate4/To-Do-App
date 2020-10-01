const addButton = document.querySelector(".addButton");
var inputValue = document.querySelector(".input");
const container = document.querySelector(".container")

class addItem{
    constructor(itemName){
        this.createDiv(itemName)
    }

    createDiv(itemName){
        let input = document.createElement("input");
        input.value = itemName;
        input.disabled = true;
        input.classList.add("itemInput");
        input.type = "text";

        let itemBox = document.createElement("div");
        itemBox.classList.add("item")

        let editButton = document.createElement("button");
        editButton.innerHTML = "EDIT"
        editButton.classList.add("editButton");
        
        let delButton = document.createElement("button");
        delButton.innerHTML = "DEL"
        delButton.classList.add("delButton");
        
        let br = document.createElement("br")

        container.appendChild(itemBox)

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(delButton);

        editButton.addEventListener('click', ()=>{this.edit(input, editButton)});
        delButton.addEventListener('click', () =>{this.delete(itemBox)});
    }

    edit(input, editButton){
        input.disabled = !input.disabled;
        if (input.disabled == false){
            editButton.innerHTML = "DONE"
        }else{
            editButton.innerHTML = "EDIT"
        }
    }

    delete(item){
        container.removeChild(item);
    }
}

function check() {
    if(inputValue != ""){
        new addItem(inputValue.value);
        inputValue.value = "";
    }
}

addButton.addEventListener('click', () => {
    console.log(inputValue.value)
    check()
});
window.addEventListener('keydown', (e)=>{
    console.log(e)
    if (e.key == "Enter"){
        check();
    }
});