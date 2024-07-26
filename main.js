let div1 = document.createElement('div')
let body1 = document.querySelector('body')
body1.appendChild(div1)
let parseData = JSON.parse(data)
console.log(parseData)
parseData.message.forEach(element => {
    div1.insertAdjacentHTML('beforeend', `<figure>
        <img src="${element}" />
        <figcaption>An elephant at sunset</figcaption>
        </figure>`
    )
});
let url1 = "https://jsonplaceholder.typicode.com/users"
async function get_data(url1){
    const response = await fetch(url1)
    const json_1 = await response.json()
    return json_1
}
try {
    const myData = await get_data(url1)
    console.log(myData)
    myData.forEach(element =>{
        div1.insertAdjacentHTML("beforeend", `
            <h2>${element.name}</h2>
            <p>${element.email}</p>
            `)
    })
} catch (error) {
    console.log(`Ошибка {error.message}`)
}