var bttB = document.getElementById("btnBuscar");
const divC = document.getElementById("contenedor");

bttB.addEventListener("click", async function(){
    divC.innerHTML = "";

    galaxyData();
     
})

async function fetchApiNasa() {
  const searchTerm = document.getElementById("inputBuscar").value;

    const response = await fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
    const jsonResponse = await response.json()
    return jsonResponse;
}

async function galaxyData(){
    const data = await fetchApiNasa()
    const galaxyArray = data.collection.items
    
    galaxyArray.forEach(element => {
        if (typeof element.links !== "undefined"){
            divC.innerHTML += `
            <div class="col-6">
            <img src="${element.links[0].href}" class="img-fixed"></img> `
        }else{
            divC.innerHTML += `<p> undefined </p>`
        }
        divC.innerHTML += `
            <h1>${element.data[0].title} </h1>
            <p> ${element.data[0].description}</p>
            <p> ${element.data[0].date_created}</p>
            </div>
        `

    });

}

