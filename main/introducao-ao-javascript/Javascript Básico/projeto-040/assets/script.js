    // Eventos de teclado 1

    /*
        Eventos de teclado:
        - onkeydown  → ocorre ao pressionar uma tecla (repete se mantiver pressionado)
        - onkeypress → ocorre enquanto a tecla está sendo segurada (obsoleto em alguns navegadores)
        - onkeyup    → ocorre ao soltar a tecla
    */

    function apertou() {
        console.log('APERTOU!');
    }

    function segurou() {
        console.log('SEGUROU!');
    }

    function soltou() {
        console.log('SOLTOU!');
    }

    document.addEventListener('keyup', soltou); // quando soltar a tecla informa no console