let zoom = document.querySelector('.zoom')
let bg = document.querySelector('#bg')
let imgZoom = document.querySelector('#imgZoom')

zoom.addEventListener("mousemove", (e)=> {
    bg.style.filter = "blur(5px)"
    imgZoom.style.opacity = 1
    let positionPx = e.x - zoom.getBoundingClientRect().left
    let positionX = (positionPx / zoom.offsetWidth) * 100
    
    let positionPy = e.y - zoom.getBoundingClientRect().top
    let positionY = (positionPy / zoom.offsetHeight) * 100

    imgZoom.style.setProperty("--zoom-x", positionX + "%")
    imgZoom.style.setProperty("--zoom-y", positionY + "%")

    let transformX = - (positionX - 50) / 3.5
    let transformY = - (positionY - 50) / 3.5
    imgZoom.style.transform = `scale(1.5) translateX(${transformX}% translateY(${transformY})%)`
})


zoom.addEventListener("mouseout", ()=> {
    imgZoom.style.opacity = 0
    bg.style.filter = "none"
})
