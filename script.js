const textElement = document.getElementById("dynamic-text");
const changeTextButton = document.getElementById("change-text");
const toggleElementButton = document.getElementById("toggle-element");
const elementContainer = document.getElementById("element-container");

changeTextButton.addEventListener("click", () => {
    textElement.textContent = "The text has been updated!";
    textElement.style.color = "red";
    textElement.style.fontWeight = "bold";
});

toggleElementButton.addEventListener("click", () => {
    const existingElement = document.getElementById("dynamic-box");

    if (!existingElement) {
        const newElement = document.createElement("div");
        newElement.id = "dynamic-box";
        newElement.textContent = "New Element Added!";
        newElement.style.width = "150px";
        newElement.style.height = "50px";
        newElement.style.backgroundColor = "green";
        newElement.style.color = "white";
        newElement.style.display = "flex";
        newElement.style.alignItems = "center";
        newElement.style.justifyContent = "center";
        newElement.style.margin = "20px auto";
        elementContainer.appendChild(newElement);
    } else {
        existingElement.remove();
    }
});
