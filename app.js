
window.onload = () => {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        document.querySelector('#mobile-warn').innerHTML = `Projects best experienced on desktop`
        document.ontouchmove = function (e) {
            e.preventDefault();
        }
    }

    const card = document.querySelector('.card')
    const container = document.querySelector('.container')
    const title = document.querySelector('.title')
    const displayPicture = document.querySelector('.display-picture img')
    const links = document.querySelector('.links')
    const jobDesc = document.querySelector('.info h3')
    const projectTitle = document.querySelector('.info h4')
    const contact = document.querySelector('.contact')
    const circle = document.querySelector('.circle')

    const snake = document.querySelector('.snake')
    const particle = document.querySelector('.particle')
    const canvas = document.querySelector('.canvas')
    if (!isMobile) {
        var snakeImage = new Image();
        snakeImage.src = "./images/snake-preview.gif"

        var particleImage = new Image();
        particleImage.src = "./images/particle2.gif"

        var canvasImage = new Image();
        canvasImage.src = "./images/canvas.gif"
    }
    title.style.transform = 'translateZ(150px)'
    jobDesc.style.transform = 'translateZ(120px)'
    displayPicture.style.transform = 'translateZ(100px)'
    links.style.transform = 'translateZ(175px)'
    projectTitle.style.transform = 'translateZ(155px)'
    contact.style.transform = 'translateZ(150px)'
    circle.style.transform = 'translateZ(1px)'

    const switchBackground = (image, projectTitleColour = "white", top = "40%") => {
        card.style.background = `url('${image.src}')`

        card.style['background-size'] = `1000px 1000px`
        card.style['background-position'] = `center top ` + top
        card.style['box-shadow'] =  `0 20px 20px rgba(0, 0, 0, 0.2), 0 0px 50px rgba(0, 0, 0, 0.2),, inset 0 0 0px #bf156a`;
        displayPicture.style.opacity = 0
        circle.style.opacity = 0
        title.style.opacity = 0
        jobDesc.style.opacity = 0
        title.style.color = "white"
        title.style.transform = "translateZ(150px) translateY(20px)"
        title.style.transition = 'all 0.2s ease'

        jobDesc.style.color = "white"
        jobDesc.style.transition = 'all 0.2s ease'

        projectTitle.style.color = projectTitleColour
        projectTitle.style.transition = 'all 0.2s ease'
    }

    const restoreBackground = () => {
        card.style.background = null
        card.style['background-color'] = '#ffdee9';
        card.style['background-imag'] = `linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)`
        card.style['box-shadow'] =  `0 20px 20px rgba(0, 0, 0, 0.2), 0 0px 50px rgba(0, 0, 0, 0.2), inset 0 0 5px #ffffff`;
        displayPicture.style.opacity = 1
        circle.style.opacity = 1
        title.style.opacity = 1
        projectTitle.opacity = 1
        jobDesc.style.opacity = 1
        title.style.color = "white"
        title.style.transform = "translateZ(150px)"
        title.style.transition = 'all 0.75s ease'

        jobDesc.style.color = "white"
        jobDesc.style.transition = 'all 0.75s ease'

        projectTitle.style.color = "white"
        projectTitle.style.transition = 'all 0.75s ease'
    }


    snake.addEventListener('mouseenter', (e) => {
        switchBackground(snakeImage, `white`, '40%')
    })

    particle.addEventListener('mouseenter', (e) => {
        switchBackground(particleImage, `white`, '100%')
    })


    canvas.addEventListener('mouseenter', (e) => {
        switchBackground(canvasImage, 'white', '90%')
    })

    canvas.addEventListener('mouseleave', (e) => {
        restoreBackground()
    })

    particle.addEventListener('mouseleave', (e) => {
        restoreBackground()
    })

    snake.addEventListener('mouseleave', (e) => {
        restoreBackground()
    })

    container.addEventListener('mousemove', (e) => {
        if (isMobile)
            return

        let x = (window.innerWidth / 2 - e.pageX) / 25
        let y = (window.innerHeight / 2 - e.pageY) / 25

        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    })

    container.addEventListener('mouseenter', (e) => {
        if (isMobile)
            return
        card.style.transition = 'none'

        title.style.transform = 'translateZ(150px)'
        jobDesc.style.transform = 'translateZ(120px)'

        displayPicture.style.transform = 'translateZ(100px)'
        links.style.transform = 'translateZ(175px)'
        projectTitle.style.transform = 'translateZ(155px)'
        contact.style.transform = 'translateZ(150px)'
    })

    container.addEventListener('mouseleave', (e) => {
        if (isMobile)
            return

        card.style.transition = 'all 0.5s ease'
        card.style.transform = `rotateY(0deg) rotateX(0deg)`
        displayPicture.style.transform = 'translateZ(2px) rotateZ(0deg)'
        links.style.transform = 'translateZ(0px)'
        jobDesc.style.transform = 'translateZ(0px)'
        title.style.transform = 'translateZ(0px)'
        projectTitle.style.transform = 'translateZ(0px)'
        contact.style.transform = 'translateZ(0px)'
    })


}
