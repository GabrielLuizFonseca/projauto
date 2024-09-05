document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {
        document.getElementById('resposta').innerText = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    } else {
        document.getElementById('resposta').innerText = 'Por favor, preencha todos os campos.';
    }
});

document.querySelectorAll('nav ul li > a').forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            event.preventDefault();
            this.parentElement.classList.toggle('active');
        }
    });
});
