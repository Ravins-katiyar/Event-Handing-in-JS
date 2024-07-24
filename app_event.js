let m = document.querySelector("#mouse h3");

m.addEventListener("mouseenter", function(event) {
    event.target.style.color = "Blue";
    setTimeout(()=> {
        event.target.style.color = "";
    },1000)
})

let nameInput = document.querySelector("input");
let nameDisplay = document.querySelector("#input h2");
nameInput.addEventListener("input",function() {
    
    let filteredValue = nameInput.value.replace(/[^a-zA-Z\s]/g, '');
    nameInput.value = filteredValue;
    nameDisplay.textContent = filteredValue;
})