navLinks = document.querySelectorAll('a[href^="#"]') // Pega todas as encoras que começam com '#'.

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Cancela qualquer tipo de reload da pagina

        const id = link.getAttribute('href'); // Pega o id inserido do href
        const target = document.querySelector(id); // Seleciona a seção do href pelo id

        if (target) target.scrollIntoView(); 
    })
    
});

const main_content = document.querySelector('.main-content');
const main_header = document.querySelector('.main-header');
const scrollY = window.scrollY

window.addEventListener('scroll', () => {
    main_content.style.opacity = window.scrollY > 100 ? '0': '1';
    main_header.style.backgroundColor = window.scrollY > 1200 && window.scrollY < 1850 ? 'var(--secondary-color)' : 'var(--acent-color)';
    main_header.style.backgroundColor = window.scrollY > 2580 && window.scrollY < 3270 ? 'var(--secondary-color)' : 'var(--acent-color)'
})

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
})

