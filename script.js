//Fetch options, we'll look into it later, not super importat right now
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

//Asynchronous function to fech api data and returning it as object(as a json, with .json).
async function foo() {
    let obj;
    let bodyElement;
    let MatchC = document.getElementById("characterName").value;
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    obj = await res.json();
    bodyElement = document.getElementById("charLastName");
    console.log(obj);
    //For loop to iterate through every object of the API response, and matching the firstName with the response.
    //Later should be changed for a better algorithm? or it doesnt matter given the size of the length of the response (54 objects)
    //MatchC2 is capitalizing every first letter of the words to call the api correctly
    let MatchC2 = MatchC.charAt(0).toUpperCase() + MatchC.slice(1);
    for (let i = 0; i < obj.length; i++){
        if (obj[i].firstName === MatchC2){
            console.log(obj[i].lastName);
            let px = obj[i].imageUrl;
            bodyElement.innerHTML = ("Ola");
            // bodyElement = bodyElement.innerHTML = "";
            // bodyElement = bodyElement.innerHTML = ("LAST NAME IS: " + obj[i].lastName);
            // bodyElement.innerHTML = bodyElement.innerHTML = ('<img src='+ px +'>');
            break;
        }
        else {
            console.log("Coundn't find any character with that name");
        }
    }
}
