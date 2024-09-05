/*document.getElementById('contatoForm').addEventListener('submit', function(event) {
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
*/
document.getElementById('menuToggle').addEventListener('click', function() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
});
