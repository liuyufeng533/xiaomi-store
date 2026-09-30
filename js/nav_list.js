window.addEventListener('load', function(){
    const navList = document.querySelectorAll('.nav_list a')
    const navAbsolute = document.querySelector('.nav_absolute')
    const navShowcase = document.querySelectorAll('.nav_showcase')
    let navIndex = 0
    for (let i = 0; i < navShowcase.length; i++) {
        navList[i].addEventListener('mouseover', function() {
            navAbsolute.style.transition = 'height 0.3s'
            navAbsolute.style.height = '210px'
            navShowcase[i].classList.toggle('none')
        })
        navList[i].addEventListener('mouseout', function() {
            navIndex = i
            navAbsolute.style.transition = 'height 0.3s'
            navAbsolute.style.height = '0'
            navShowcase[i].classList.toggle('none')
        })
        navAbsolute.addEventListener('mouseover', function() {
            navAbsolute.style.transition = 'height 0.3s'
            navAbsolute.style.height = '210px'
            navShowcase[navIndex].classList.toggle('none')
        })
        navAbsolute.addEventListener('mouseout', function() {
            navAbsolute.style.transition = 'height 0.3s'
            navAbsolute.style.height = '0'
            navShowcase[navIndex].classList.toggle('none')
        })
    }
})