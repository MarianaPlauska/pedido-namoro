document.addEventListener('DOMContentLoaded', () => {
    const botaoNao = document.getElementById('nobtn');
    const botaoSim = document.getElementById('yesbtn');
    const container = document.getElementById('container');

    function moveButton() {
        const larguraJanela = container.clientWidth;
        const alturaJanela = container.clientHeight;

        const maxX = larguraJanela - botaoNao.offsetWidth;
        const maxY = alturaJanela - botaoNao.offsetHeight;

        const aleatorioX = Math.floor(Math.random() * maxX);
        const aleatorioY = Math.floor(Math.random() * maxY);

        botaoNao.style.position = 'absolute';
        botaoNao.style.left = aleatorioX + 'px';
        botaoNao.style.top = aleatorioY + 'px';
    }

    botaoNao.addEventListener('mouseover', moveButton);
    botaoNao.addEventListener('touchstart', moveButton);

    botaoSim.addEventListener('click', () => {
        window.location.href = 'ily.html';
    });
});
