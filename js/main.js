
document.addEventListener('change', function () {
    if (document.getElementById('show-menu').checked == true) {
        document.getElementById('sidebar').classList.add('actived')
        console.log('activo')
    } else {
        document.getElementById('sidebar').classList.remove('actived')
        console.log('inactivo')
    }
})
async function getImages() {
    const key = 'IHhUGN7S6iD-Q0spaBMk3fOGdjgCNJg0uXdsCUlUIqA';
    let response = await fetch(`https://api.unsplash.com/photos/?client_id=${key}`)
    .then(response=> {
        return  response.json()  
    })
        .then(jsonResponse => { 
            let arrayImg = '';
            console.log(jsonResponse)
            jsonResponse.forEach(image => {
                arrayImg += `<div class="massonry__item">
                            <img class="massonry__item__image" src="${image.urls.regular}" key="${image.id}">
                            <div class="massonry__item__description">
                            <p class="name-logo">Creative Logo</p> <br> <p class="description">${image.alt_description}</p>
                            </div>
                        </div>`;
                console.log( jsonResponse, "item")   
                document.getElementById('photos').innerHTML = arrayImg
            })
        })

}

getImages()



function getFilteredByKey(array, key, value) {
    return array.filter(function (e) {
        return e[key] == value;
    });
}