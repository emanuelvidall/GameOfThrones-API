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
    console.log(obj)
    //For loop to iterate through every object of the API response, and matching the firstName with the response.
    //Later should be changed for a better algorithm? or it doesnt matter given the size of the length of the response (54 objects)
    for (let i = 0; i < obj.length; i++){
        if (obj[i].firstName === MatchC){
            console.log(obj[i].lastName);
            let px = obj[i].imageUrl;
            x.innerHTML = "";
            x.innerHTML = x.innerHTML + "<br>" + ("LAST NAME IS: " + obj[i].lastName);
            x.innerHTML = x.innerHTML + "<br>" + ('<img src='+ px +'>');
            break;
        }
        else {
            console.log("Coundn't find any character with that name");
        }
    }
}
