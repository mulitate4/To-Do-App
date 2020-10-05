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

        // let input = document.createElement("input");
        // input.value = item;
        // input.disabled = true;
        // input.classList.add("itemInput");
        // input.type = "text";

        container.appendChild(itemBox)

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(delButton);

        localStorage.setItem(itemName, input.value);

        editButton.addEventListener('click', ()=>{this.edit(input, editButton, itemName)});
        delButton.addEventListener('click', () =>{this.delete(itemBox, itemName)});

        input.addEventListener('keydown', (e)=>{
            if (e.key === "Enter"){
                if(input.disabled===false){
                    if(input === document.activeElement){
                        this.edit(input, editButton, itemName);
                }
            }
        }
    });
}

    edit(input, editButton, itemName){
        input.disabled = !input.disabled;
        if (input.disabled == false){
            editButton.innerHTML = "DONE"
        }else{
            editButton.innerHTML = "EDIT"
            localStorage.setItem(itemName, input.value)
        }
    }

    delete(item, itemName){
        container.removeChild(item);
        localStorage.removeItem(itemName)
    }
}

function check() {
    if (typeof localStorage !== "undefined"){
        if(inputValue.value != ""){
            new addItem(inputValue.value);
            inputValue.value = "";
        }
    }else{
        if (document.querySelector("h2LocalStorage")!==null);
            h2 = document.createElement("h2");
            h2.classList.add("h2LocalStorage");
            h2.innerHTML = "Your Device doesn't support LocalStorage!";
            container.appendChild(h2);
    }
}

addButton.addEventListener('click', () => {
    check()
});

window.addEventListener('keydown', (e)=>{
    if (e.key == "Enter"){
        check();
    }
});

Object.values(localStorage).forEach((item)=>{
    new addItem(item)
})
