//different ways of reading data froom a source
// promise chaining


function readFilePromise()
{
fetch('customers.json')
.then(response => {
    if(!response.ok)
    {
        throw new Error ('fetch error :' +response.status);
    }
    return response.json();

})
 .then (customers => 
    {
        generateHTML(customers);
    })
    .catch(error =>
    {
console.log('error :' +error);
    });
}

async function readFileAsync()
{
try{
    let data=await fetch('customers.json');
    let customers=await data.json();
    generateHTML(customers);
}
catch{
    console.log('error, couldn not read from json file');
}
}
//Render html
function generateHTML(customers)

 {
    let html='';
    for(let customer of customers )
    {
        html += `
        <h3> ${customer.firstname}  ${customer.lastname} </h3>
        <p> ${customer.firstname} works at  ${customer.companyname} </p>
        `;
        
      /*  html+= '<hr>';
        let customerDiv = document.createElement('div');
        customerDiv.innerHTML = html;
        document.querySelector('body').append(customerDiv);*/
    }

html+= '<hr>';
let customerDiv = document.createElement('div');
customerDiv.innerHTML = html;
document.querySelector('body').append(customerDiv);
 }
readFilePromise();
readFileAsync();

