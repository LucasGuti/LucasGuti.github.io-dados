function lanzar(a, b) {
    let resultado = [];

    for (i = 0; i <= 50; i++) {

        let a = Math.round(Math.random() * 6);
        let b = Math.round(Math.random() * 6);
        let aleatorio = parseInt (a + b);
        resultado.push(aleatorio);
        console.log(resultado);
    }
};