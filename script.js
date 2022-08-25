var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

    async function foo() {
    let obj;
    let firstName2;
    const res = await fetch('https://thronesapi.com/api/v2/Characters')
    obj = await res.json();
    console.log(obj[0].firstName)
    // firstName2 =  document.getElementById("userInput").value;
    document.write("LAST NAME IS: " + obj[0].lastName);
    }

    foo();
