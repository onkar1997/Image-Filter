let tabs = document.getElementById('myList');
let images = document.querySelectorAll('.images');

tabs.addEventListener('click', (e) => {
    if(e.target.value !== undefined)
        filterImages(e.target.dataset.category)
})

const filterImages = (value) => {
    images.forEach((image) => {
        if(image.dataset.category === value || value === 'all') {
            image.style.display = 'block'
        }
        else {
            image.style.display = 'none'
        }
    });
}