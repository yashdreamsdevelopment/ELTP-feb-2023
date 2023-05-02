import references from "./references.js";

const handleSubmit = () => {
    const textValue = references.todoInput.value;
    createRow(textValue);
}

const createRow = (textValue) => {
    const div = document.createElement("div");

    const para = document.createElement("p");
    para.innerText = textValue;

    const editBtn = document.createElement("button");
    editBtn.innerText = 'edit';
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'delete';

    div.appendChild(para);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);

    editBtn.addEventListener("click", () => {
        console.log("edit btn clicked");
    })
}

references.submitBtn.addEventListener("click", handleSubmit);



