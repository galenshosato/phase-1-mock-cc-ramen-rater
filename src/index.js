let firstRamen

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramens => ramens.forEach((ramen) => {   
    if (firstRamen === undefined) {
        firstRamen = ramen
        renderRamen(firstRamen)
    }
    ramenClick(ramen)
    
    
}))
.then(() => {
    addNewRamen()
})

function ramenClick(ramenPic) {
    const clickImage = document.createElement('img')
    clickImage.src = ramenPic.image
    clickImage.addEventListener('click', (event) => {
        renderRamen(ramenPic)
    })
    document.getElementById('ramen-menu').append(clickImage)
}

function renderRamen(ramen) {
    const ramenName = document.querySelector('.name')
    const ramenImg = document.querySelector('.detail-image')
    const ramenRestuarant = document.querySelector('.restaurant')
    const ramenRating = document.getElementById('rating-display')
    const ramenComment = document.getElementById('comment-display')
    
    ramenName.textContent = ramen.name
    ramenImg.src = ramen.image
    ramenRestuarant.textContent = ramen.restaurant
    ramenRating.textContent = ramen.rating
    ramenComment.textContent = ramen.comment

}

function addNewRamen() {
    let newRamen = {}
    const newRamenForm = document.getElementById('new-ramen')
    newRamenForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newRamenName = document.getElementById('new-name').value
        let newRamenImg = document.getElementById('new-image').value
        let newRamenRestaurant = document.getElementById('new-restaurant').value
        let newRamenRating = document.getElementById('new-rating').value
        let newRamenComment = document.getElementById('new-comment').value
        newRamen = {
            name: newRamenName,
            image: newRamenImg,
            restaurant: newRamenRestaurant,
            rating: newRamenRating,
            comment: newRamenComment
        }

         renderRamen(newRamen)
         ramenClick(newRamen)
    })
    
}