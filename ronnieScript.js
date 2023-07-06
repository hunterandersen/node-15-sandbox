// Selecting elements
const sloganElement = document.getElementById("slogan");
console.log(sloganElement);

sloganElement.innerText = "Best Waffles This Side of the Appalachian!";

sloganElement.style.fontSize = "28px";

//Wait a few seconds before doing an action
setTimeout(() => {
    const liArr = document.getElementsByTagName("li");
    console.log(liArr);
    //Create a NEW element onto the DOM
    const newLi = document.createElement("li");
    //Give it some text
    newLi.textContent = "Hey, a new list item!";
    //Attach it to the page somewhere
    //First, grab the ordered list
    const ol = document.querySelector("#menuSection > ol");
    ol.appendChild(newLi);

    for (let i = 0; i < liArr.length; i++){
        liArr[i].style.fontSize = "3rem";
    }
    for (const li of liArr){
        li.style.color = "blue";
    }
}, 3000);