const tela = document.querySelector('.modo-tela');
        const btnDark = document.querySelector('#dark');
        const btnLight = document.querySelector('#light');
        const bgBtn = document.querySelector('.btnEl')

        btnDark.addEventListener('click', addDark);
        btnLight.addEventListener('click', addLight)

        function addDark() {
            tela.classList.add('darkMode');
            tela.classList.remove('lightMode');
        }
        function addLight() {
            tela.classList.add('lightMode');
            tela.classList.remove('darkMode');
        }