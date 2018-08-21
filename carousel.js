var currentImage = 0

var imageList = [
    './images/soci1.png',
    './images/soci2.png',
    './images/soci3.png',
    './images/soci4.png'
]

function setBullets() {
    var bulletPoint = ''

    for (let i = 0; i < imageList.length; i++) {
        if (i === currentImage) {
            bulletPoint = bulletPoint + '<span class="color-blue-light px-1">&bull;</span>'
        } else {
            bulletPoint = bulletPoint + '<span class="color-white px-1">&bull;</span>'
        }
    }
    document.getElementById('bullet').innerHTML = bulletPoint
}

function setCarouselImage(src) {
    var image = document.getElementById('carousel')
    image.setAttribute("style", "background-image: url(" + src + ")")
}

setBullets()

var slider = setInterval(startSlider, 5000)

function startSlider() {
    currentImage = currentImage === imageList.length - 1 ? 0 : currentImage + 1
    setBullets()
    setCarouselImage(imageList[currentImage])
}

function stopSlider() {
    clearInterval(slider)
}

document.getElementById('arrow-prev').addEventListener('click', () => {
    stopSlider()
    currentImage = currentImage === 0 ? imageList.length - 1 : currentImage - 1
    setBullets()
    setCarouselImage(imageList[currentImage])
    slider = setInterval(startSlider, 5000)
})

document.getElementById('arrow-next').addEventListener('click', () => {
    stopSlider()
    currentImage = currentImage === imageList.length - 1 ? 0 : currentImage + 1
    setBullets()
    setCarouselImage(imageList[currentImage])
    slider = setInterval(startSlider, 5000)
})
