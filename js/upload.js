window.addEventListener('load', function() {
    const upload = document.querySelector('.upload')
    const uploadAbsolute = document.querySelector('.upload_absolute')
    const arrow = document.querySelector('.arrow')
    upload.addEventListener('mouseover', function() {
        uploadAbsolute.style.height = '149px'
        uploadAbsolute.style.transition = 'height 0.3s'
        arrow.classList.toggle('none')
    })
    upload.addEventListener('mouseout', function() {
        uploadAbsolute.style.height = 0
        uploadAbsolute.style.transition = 'height 0.3s'
        arrow.classList.toggle('none')
    })
    uploadAbsolute.addEventListener('mouseenter', function() {
        uploadAbsolute.style.height = '149px'
        uploadAbsolute.style.transition = 'height 0.3s'
        arrow.classList.toggle('none')
    })
     uploadAbsolute.addEventListener('mouseleave', function() {
        uploadAbsolute.style.height = 0
        uploadAbsolute.style.transition = 'height 0.3s'
        arrow.classList.toggle('none')
    })
})