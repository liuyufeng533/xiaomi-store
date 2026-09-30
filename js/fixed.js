window.addEventListener('load', function(){
    const fixed = document.querySelector('.fixed')
    const touchFixed1 = document.querySelectorAll('.fixed_help1')
    const touchFixed2 = document.querySelectorAll('.fixed_help2')
    const top = document.querySelectorAll('.top')
    window.addEventListener('scroll', function(){
    if (window.scrollY >= 1500){
            fixed.classList.add('scrolled')
            fixed.classList.remove('scroll')
            for (let i = 0; i < top.length; i++){
                top[i].classList.remove('none')
            }
        } else {
            fixed.classList.add('scroll')
            fixed.classList.remove('scrolled')
            for (let i = 0; i < top.length; i++){
                top[i].classList.add('none')
            }
        }
   })
    for (let i = 0; i < touchFixed1.length; i++){
        touchFixed1[i].addEventListener('mouseenter', function(){
            touchFixed1[i].style.display = "none"
            touchFixed2[i].style.display = "block"
        })
        touchFixed2[i].addEventListener('mouseleave', function(){
            touchFixed2[i].style.display = "none"
            touchFixed1[i].style.display = "block"
        })
    }
})