//Fetch options, we'll look into it later, not super importat right now
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// Get the input field
var input = document.getElementById("characterField");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("triggerButton").click();
    }
});

//Asynchronous function to fech api data and returning it as object(as a json, with .json).
async function foo() {
    let obj;
    let bodyElement;
    let familyElement;
    let imgElement = document.getElementById("fetchImageAPI");
    let titleElement;
    let MatchC = document.getElementById("characterField").value;
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    obj = await res.json();
    familyElement = document.getElementById("familyName");
    bodyElement = document.getElementById("charLastName");
    titleElement = document.getElementById("charTitle");
    console.log(obj);
    //For loop to iterate through every object of the API response, and matching the firstName with the response.
    //Later should be changed for a better algorithm? or it doesnt matter given the size of the length of the response (54 objects)
    //MatchC2 is capitalizing every first letter of the words to call the api correctly
    let MatchC2 = MatchC.charAt(0).toUpperCase() + MatchC.slice(1);
    for (let i = 0; i < obj.length; i++){
        if (obj[i].firstName === MatchC2){
            console.log(obj[i].lastName);
            let px = obj[i].imageUrl;
            bodyElement.innerHTML = "";
            bodyElement.innerHTML = ("Lastname: " + obj[i].lastName);
            familyElement.innerHTML = ("Family: " +obj[i].family);
            titleElement.innerHTML = ("Title: " + obj[i].title);
            imgElement.src = obj[i].imageUrl;
            break;
        }
        else {
            console.log("Coundn't find any character with that name");
        }
    }
}
