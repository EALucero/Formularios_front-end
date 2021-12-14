window.addEventListener('load', () => {
    let titulo = document.querySelector('.moviesAddTitulo');
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //////////
    /* function randomColors (c1, c2, c3, c4, c5) {
        let colors = [c1, c2, c3, c4, c5];
        let random = Math.floor((Math.random() * (5-0)) + 0);
        let colorRandom = colors[random];
        return colorRandom;
    };

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = randomColors("green", "red", "blue", "yellow", "orange");
    });

    let $input = document.getElementById('titulo');
    let word = "";
    let count = 0;

    $input.addEventListener('keypress', e => {
        console.log(e.key);
        console.log(count);

        switch (count && e.key) {
            case 0 && "s":
            case 1 && "e":
            case 2 && "c":
            case 4 && "r":
            case 5 && "e":
            case 6 && "t":
                word += e.key;
                count++;
                break;
            case 7 && "o":
                count = 0;
                alert('SECRETO MAGICO');
                break;
            default:
                count = 0;
                word = '';
                break;
        }

        console.log('Palabra: ' + word + '\t Contador: ' + count);
    }); */
});