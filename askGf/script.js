document.addEventListener('DOMContentLoaded', () => {
    const botaoNao = document.getElementById('nobtn');
    const botaoSim = document.getElementById('yesbtn');

    botaoNao.addEventListener('mouseover', () => {
        const larguraJanela = window.innerWidth;
        const alturaJanela = window.innerHeight;

        const maxX = larguraJanela - botaoNao.offsetWidth;
        const maxY = alturaJanela - botaoNao.offsetHeight;

        const aleatorioX = Math.floor(Math.random() * maxX);
        const aleatorioY = Math.floor(Math.random() * maxY);

        botaoNao.style.left = aleatorioX + 'px';
        botaoNao.style.top = aleatorioY + 'px';
    });

    botaoSim.addEventListener('click', () => {
        window.location.href = 'ily.html';
    });
});
