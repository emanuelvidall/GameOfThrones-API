var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var characterInput = document.getElementById("characterField");
characterInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("triggerButton").click();}
});

async function fetchAndRender() {
    let mainJsonObject;
    let bodyElement;
    let familyElement;
    let imgElement = document.getElementById("fetchImageAPI");
    let titleElement;
    let characterFound;
    let matchCharacter = document.getElementById("characterField").value;
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    mainJsonObject = await res.json();
    familyElement = document.getElementById("familyName");
    bodyElement = document.getElementById("charLastName");
    titleElement = document.getElementById("charTitle");
    let capitalizedCharacterName = matchCharacter.charAt(0).toUpperCase() + matchCharacter.slice(1);
    for (let i = 0; i < mainJsonObject.length - 1; i++){
        if (mainJsonObject[i].firstName === capitalizedCharacterName){
            bodyElement.innerHTML = "";
            bodyElement.innerHTML = ("Lastname: " + mainJsonObject[i].lastName);
            familyElement.innerHTML = ("Family: " +mainJsonObject[i].family);
            titleElement.innerHTML = ("Title: " + mainJsonObject[i].title);
            imgElement.src = mainJsonObject[i].imageUrl;
            characterFound = true;
            bodyElement.style.color = "black";
            break;
        }
        else {
            characterFound = false;
        }
    }
    if (characterFound == false){
        bodyElement.innerHTML = ("Character not found");
        bodyElement.style.color = "red";
    }
}
