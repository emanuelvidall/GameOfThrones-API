var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

    // const p = document.getElementById("myPelement")
// fetch('https://thronesapi.com/api/v2/Characters')
//     .then((response) => {
//         const obj = JSON.parse(response);
//         document.getElementById("myPelement").innerHTML = obj.firstName;
//         return response.json();
//     })
    // .then((data) => {
    //     p.innerText = data
    // });

    // const obj = JSON.parse(data);

    // document.getElementById("myPelement").innerHTML = obj.firstName;


// async function getAllCharacters() {
//     const response = await fetch('https://thronesapi.com/api/v2/Characters');
//     const data = await response.json();
//     console.log('Data', data)
//     return data;
//     }

    async function foo() {
    let obj;
    const res = await fetch('https://thronesapi.com/api/v2/Characters')
    obj = await res.json();
    console.log(obj[0].firstName)
    }

    foo();

    iMp = document.getElementById("name").value;

    function butones(){
        console.log(iMp);
    }