
window.onload = () => {
    const card = document.querySelector('.card')
    const container = document.querySelector('.container')
    const title = document.querySelector('.title')
    const displayPicture = document.querySelector('.display-picture img')
    const links = document.querySelector('.links')
    const jobDesc = document.querySelector('.info h3')
    const projectTitle = document.querySelector('.info h4')
    const contact = document.querySelector('.contact')


    
    container.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 25
        let y = (window.innerHeight / 2 - e.pageY) / 25

        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    })

    container.addEventListener('mouseenter', (e) => {
        card.style.transition = 'none'
        title.style.transform = 'translateZ(150px)'
        jobDesc.style.transform = 'translateZ(120px)'

        displayPicture.style.transform = 'translateZ(100px)'
        links.style.transform = 'translateZ(175px)'
        projectTitle.style.transform = 'translateZ(155px)'
        contact.style.transform = 'translateZ(150px)'
    })


    container.addEventListener('mouseleave', (e) => {
        card.style.transition = 'all 0.5s ease'
        card.style.transform = `rotateY(0deg) rotateX(0deg)`
        displayPicture.style.transform = 'translateZ(0px) rotateZ(0deg)'
        links.style.transform = 'translateZ(0px)'
        jobDesc.style.transform = 'translateZ(0px)'
        title.style.transform = 'translateZ(0px)'
        projectTitle.style.transform = 'translateZ(0px)'
        contact.style.transform = 'translateZ(0px)'

    })

}
