// Select elements
const textElement = document.getElementById("dynamic-text");
const changeTextButton = document.getElementById("change-text");
const toggleElementButton = document.getElementById("toggle-element");
const elementContainer = document.getElementById("element-container");

// Add transition effect to text
textElement.style.transition = "color 0.5s ease, font-weight 0.5s ease";

// Change text content dynamically with smooth effect
changeTextButton.addEventListener("click", () => {
    textElement.textContent = "The text has been updated!";
        textElement.style.color = "red"; // Modifies CSS styles dynamically
            textElement.style.fontWeight = "bold"; // Adds bold styling with smooth transition
            });

            // Add or remove an element with a fade effect
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
                                                                                                                    newElement.style.opacity = "0";  // Initially invisible
                                                                                                                            newElement.style.transition = "opacity 0.5s ease"; // Smooth fade effect
                                                                                                                                    
                                                                                                                                            elementContainer.appendChild(newElement);
                                                                                                                                                    setTimeout(() => newElement.style.opacity = "1", 100); // Fade in effect
                                                                                                                                                        } else {
                                                                                                                                                                existingElement.style.opacity = "0"; // Fade out effect
                                                                                                                                                                        setTimeout(() => existingElement.remove(), 500); // Remove after transition
                                                                                                                                                                            }
                                                                                                                                                                            });
                                                                                                                                                                            