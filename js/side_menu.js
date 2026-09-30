window.addEventListener('load', function(){
    const menuList = document.querySelectorAll('.side_menu ul li a')
    const menuAbsolute = document.querySelector('.menu_absolute')
    const menuShowcase = document.querySelectorAll('.menu_showcase')
    let sideTime
    let sideIndex = 0
    for(let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener('mouseenter', function(){
            if(sideTime) {
                clearTimeout(sideTime)
            }
            for(let j = 0; j < menuShowcase.length; j++) {
                menuShowcase[j].classList.add('none')
            }
            menuAbsolute.classList.remove('none')
            menuShowcase[i].classList.remove('none')
        })
        menuList[i].addEventListener('mouseleave', function(){
                sideIndex = i
                sideTime = setTimeout(function(){
                menuAbsolute.classList.add('none')
                menuShowcase[sideIndex].classList.add('none')
            }, 200)
        })
        menuAbsolute.addEventListener('mouseenter', function(){
            if(sideTime) {
                clearTimeout(sideTime)
            }
        })
        menuAbsolute.addEventListener('mouseleave', function(){
            menuAbsolute.classList.add('none')
            menuShowcase[i].classList.add('none')
        })
    }
})