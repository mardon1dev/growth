let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");
let body = document.querySelector("body");
let header = document.querySelector(".site-header")
let search = document.querySelector(".header__right--search");
let search2 = document.querySelector(".header__search");
let searchForm = document.querySelector(".header__searchForm");
burger.addEventListener("click", function() {
    burger.classList.toggle("toggle");
    menu.classList.toggle("active");
    searchForm.classList.remove("form");
});

search.addEventListener("click", function() {
    searchForm.classList.toggle("form");
})

search2.addEventListener("click", function() {
    searchForm.classList.toggle("form");
})

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        header.classList.add("header--scroll")
    }
    else if(window.scrollY > 100){
        header.classList.remove("header--scroll")
    }
    else{
        header.classList.remove("header--scroll")
    }
})