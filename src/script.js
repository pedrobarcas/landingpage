navLinks = document.querySelectorAll('a[href^="#"]') // Pega todas as encoras que começam com '#'.

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Cancela qualquer tipo de reload da pagina

        const id = link.getAttribute('href'); // Pega o id inserido do href
        const target = document.querySelector(id); // Seleciona a seção do href pelo id

        if (target) target.scrollIntoView(); 
    })
    
});


window.addEventListener('resize', () => {
    console.log(`Largura da janela: ${window.innerWidth}px`);
})