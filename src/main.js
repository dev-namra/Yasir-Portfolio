const menuBurger = document.querySelector('#menuBurger');
const navbarBurger = document.querySelector('#navbarBurger');
let menu = true;
menuBurger.addEventListener('click', () => {
    if(menu == true){
        navbarBurger.style.display = 'flex';
        // navbarBurger.classList.remove('hidden');
        menu = false;
    } else {
        navbarBurger.style.display = 'none';
        // navbarBurger.classList.add('hidden');
        menu = true;
    }
    
})
