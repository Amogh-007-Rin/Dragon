let heading = document.querySelector(".heading")

async function getData(){
    let response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1")
    console.log(response.status)
    heading.innerHTML = response.status
}

getData()