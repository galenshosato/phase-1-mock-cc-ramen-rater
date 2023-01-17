// get ramen from API
let firstRamen

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramenMenu => ramenMenu.forEach(ramens => {
    if(firstRamen === undefined) {
        firstRamen = ramens
        renderRamen(firstRamen)
    }

    let ramenPicture = document.createElement('img')
    ramenPicture.src = ramens.image
    
    ramenPicture.addEventListener('click', (event => {
        renderRamen(ramens)
    }))


    document.getElementById('ramen-menu').append(ramenPicture)

}
))



function renderRamen(ramen) {
    const ramenImage = document.querySelector('.detail-image')
    ramenImage.src = ramen.image

    const ramenName = document.querySelector('.name')
    ramenName.textContent = ramen.name

    const ramenRestaurant = document.querySelector('.restaurant')
    ramenRestaurant.textContent = ramen.restaurant

    const ramenRating = document.getElementById('rating-display')
    ramenRating.textContent = ramen.rating

    const ramenComment = document.getElementById('comment-display')
    ramenComment.textContent = ramen.comment

    

}

let ramenForm = document.getElementById('new-ramen')
ramenForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const newName = document.getElementById('new-name')
    const newRestaurant = document.getElementById('new-restaurant')
    const newImage = document.getElementById('new-image')
    const newRating = document.getElementById('new-rating')
    const newComment = document.getElementById('new-comment')
    
    const newRamen = {
        name: newName.value,
        restaurant: newRestaurant.value,
        image: newImage.value,
        rating: newRating.value,
        comment: newComment.value
    }
    
    renderRamen(newRamen)
    let ramenPic = document.createElement('img')
    ramenPic.src = newRamen.image

    ramenPic.addEventListener('click', (event) => {
        renderRamen(newRamen)
    })

    document.getElementById('ramen-menu').append(ramenPic)
    

    ramenForm.reset()
    

})