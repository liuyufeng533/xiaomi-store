window.addEventListener('load', function() {
    const searchText = document.querySelector('#search_text')
    const searchBtn = document.querySelector('#search_btn')
    const productList = document.querySelector('.product_list')
    const text = document.querySelectorAll('.product_list li a')
    let i = 0
    searchText.placeholder = text[i].innerHTML
    function f1() {
         if(i < text.length) {
            searchText.placeholder = text[i].innerHTML
            i++
        }else {
            i = 0
        }
    }   
    let searchTimer = setInterval(f1, 5000)
    function f2() {
        if(searchText.value) {
            clearInterval(searchTimer)
        } else {
            if(!searchTimer) {
                searchTimer = setInterval(f1, 5000)
            }
        }
    }
    searchText.addEventListener('focus', function() {
    searchText.classList.toggle('search_border')
    searchBtn.classList.toggle('search_border')
    productList.classList.toggle('search_border')
    productList.classList.toggle('none')
    f2()
    })
    searchText.addEventListener('blur', function() {
    searchText.classList.toggle('search_border')
    searchBtn.classList.toggle('search_border')
    productList.classList.toggle('search_border')
    productList.classList.toggle('none')
    f2()
    })
})