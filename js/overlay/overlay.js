let dropdownBtn = document.querySelector('#dropdown-btn');
let dropdown = document.querySelector('#dropdown');
let arrowDown = document.querySelector('#arrow-down');

dropdownBtn.addEventListener ('click', function() {
    arrowDown.classList.toggle('anim');
    dropdown.classList.toggle('visible');
});