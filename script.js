let up = document.querySelector('.up-button');
let vis = false;

window.onscroll = function() {
    if (window.pageYOffset > 700){
        up.classList.remove('visib');
    } else {
        up.classList.add('visib');
    }
}

up.onclick = function() {
    window.scrollTo(0, 0);
}