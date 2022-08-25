//Fetch options, we'll look into it later, not super importat right now
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
//Asynchronous function to fech api data and returning it as object(as a json, with .json).
async function foo() {
    let obj;
    let x;
    let MatchC = document.getElementById("exemplo1").value;
    const res = await fetch('https://thronesapi.com/api/v2/Characters')
    obj = await res.json();
    x = document.getElementById("main")
    // x.innerHTML = x.innerHTML + "<br>" + ("LAST NAME IS: " + obj[0].lastName);
    console.log(obj)
    //For loop to iterate through every object of the API response, and matching the firstName with the response.
    //Later should be changed for a better algorithm? or it doesnt matter given the size of the length of the response (54 objects)
    for (let i = 0; i < obj.length; i++){
        if (obj[i].firstName === MatchC){
            console.log(obj[i].lastName);
            break;
        }
        else {
            console.log("Coundn't find any character with that name");
        }
    }
}
