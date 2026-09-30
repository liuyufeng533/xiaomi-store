window.addEventListener('load', function(){
    const side = document.querySelector('.side')
    const sideUl = document.querySelector('.side ul')
    const sideImgs = document.querySelectorAll('.side ul li')
    const rank = document.querySelector('.rank')
    const lbtn = document.querySelector('.lbtn')
    const rbtn = document.querySelector('.rbtn')
    const width = side.offsetWidth
    const length = sideImgs.length
    let index = 0
    let flag = true
    for (let i = 0; i < length; i++){
        const span = document.createElement('span')
        rank.appendChild(span)
    }
    const rankSpan = document.querySelectorAll('.rank span')
    const clone = sideImgs[0].cloneNode(true)
    sideUl.appendChild(clone)
    rankSpan[0].classList.add('side_bgc')
    function animate(imgIndex) {
        let number = imgIndex
        for(let i = 0; i < rankSpan.length; i++) {
            rankSpan[i].classList.remove('side_bgc')
        }
        if (number < 0) {
            sideUl.style.transition = 'none'
            sideUl.style.transform = `translateX(${-(length * width)}px)`
            setTimeout(function(){
                sideUl.style.transform = `translateX(${-((length - 1) * width)}px)`
                sideUl.style.transition = 'transform 0.3s'
                flag = true
            }, 20)
            number = length - 1
        }else {
            sideUl.style.transform = `translateX(${-(imgIndex * width)}px)`
            sideUl.style.transition = 'transform 0.3s'
            if (number >= length) {
                number = 0
                setTimeout(function(){
                    sideUl.style.transition = 'none'
                    sideUl.style.transform = 'translateX(0)'
                    flag = true
                }, 300)
            }
        }
        setTimeout(function(){
            flag = true
        }, 300)
        rankSpan[number].classList.add('side_bgc')
        return number
    }
    let sideTimer = setInterval(function(){
        index++
        index = animate(index)
    }, 2000)
    side.addEventListener('mouseenter', function(){
        clearInterval(sideTimer)
    })
    side.addEventListener('mouseleave', function(){
        sideTimer = setInterval(function(){
            index++
            index = animate(index)
        }, 2000)
    })
    lbtn.addEventListener('click', function(){
        if (flag) {
            flag = false
            index--
            index = animate(index)
        }
    })
    rbtn.addEventListener('click', function(){
        if (flag) {
            flag = false
            index++
            index = animate(index)
        }
    })
    for(let i = 0; i < rankSpan.length; i++) {
        rankSpan[i].addEventListener('click', function(){
           if (flag) {
            flag = false
            index = i
            animate(index)
           }
        })
    }
})
