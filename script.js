document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btn-conclusao");
    const caixaConclusao = document.getElementById("texto-conclusao");

    const mensagemConclusao = `
        <h4 style="color: #1e3c72; margin-bottom: 10px; font-weight: 600;">O Elo Inquebrável</h4>
        <p style="color: #4a5568; font-size: 1rem; line-height: 1.7;">
            O campo e a cidade não são realidades isoladas, mas sim duas partes de um mesmo ecossistema. 
            Enquanto o campo alimenta as áreas urbanas e fornece as matérias-primas essenciais, a cidade retribui com a tecnologia avançada, a pesquisa científica e os serviços financeiros que modernizam a produção. 
            <strong>A verdadeira evolução nasce do equilíbrio e da cooperação mútua entre esses dois mundos.</strong>
        </p>
    `;

    botao.addEventListener("click", () => {
        // Insere o conteúdo estruturado
        caixaConclusao.innerHTML = mensagemConclusao;
        
        // Ativa a classe CSS que faz a caixa expandir e aparecer suavemente
        caixaConclusao.classList.add("mostrar");
        
        // Estiliza o botão para indicar que já foi clicado
        botao.style.opacity = "0.6";
        botao.style.transform = "scale(0.98)";
        botao.style.cursor = "not-allowed";
        botao.innerText = "Parceria Confirmada! ✨";
    });
});
